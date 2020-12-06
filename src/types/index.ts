import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";

// Navigation
export enum routeNames {
    Splash = "Splash",
    Login = "Login",
    SignUp = "SignUp",
}
export type SplashStackParams = {
    [routeNames.Splash]: undefined;
};
export type AuthStackParams = {
    [routeNames.Login]: undefined;
    [routeNames.SignUp]: undefined;
};

//Contexts
// AuthContext
export type AuthContextValue = {
    isLoading: boolean;
    isUserPresent: boolean;
};

//Utils
export type ImagePickerResolveResult = ImageInfo;
export type ImagePickerRejectReason = {
    error: any;
    message: string;
};
export type ImagePickerPromiseResult = ImageInfo | ImagePickerRejectReason;
