import * as ImagePicker from "expo-image-picker";
import {
    ImagePickerPromiseResult,
    ImagePickerRejectReason,
    ImagePickerResolveResult,
} from "../types";

export const pickImageFromLibrary: () => Promise<ImagePickerPromiseResult> = () =>
    new Promise(
        (
            resolve: (result: ImagePickerResolveResult) => void,
            reject: (reason: ImagePickerRejectReason) => void
        ) => {
            ImagePicker.getCameraPermissionsAsync()
                .then((res) => {
                    if (res.granted) {
                        ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            allowsEditing: true,
                            base64: true,
                        })
                            .then((res) => {
                                res.cancelled
                                    ? reject({
                                          error: null,
                                          message: "Picker cancelled",
                                      })
                                    : resolve(res);
                            })
                            .catch((error) => {
                                reject({
                                    error,
                                    message: "Error in Opening Image Library",
                                });
                            });
                    } else if (!res.granted) {
                        ImagePicker.requestCameraPermissionsAsync().then(
                            (res) => {
                                if (res.granted) {
                                    ImagePicker.launchImageLibraryAsync({
                                        mediaTypes:
                                            ImagePicker.MediaTypeOptions.Images,
                                        allowsEditing: true,
                                        base64: true,
                                    })
                                        .then((res) => {
                                            res.cancelled
                                                ? reject({
                                                      error: null,
                                                      message:
                                                          "Picker cancelled",
                                                  })
                                                : resolve(res);
                                        })
                                        .catch((error) => {
                                            reject({
                                                error,
                                                message:
                                                    "Error in Opening Image Library",
                                            });
                                        });
                                }
                            }
                        );
                    }
                })
                .catch((error) => {
                    reject({
                        error,
                        message: "Error in getting Permission",
                    });
                });
        }
    );
