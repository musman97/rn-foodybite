import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import {
    TouchableHighlight,
    TouchableOpacity,
} from "react-native-gesture-handler";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { BlurView } from "expo-blur";
import { AuthTextInput, ScreenContainer } from "../../components";
import Button from "../../components/Button/Button";
import { Colors, Icons, Images } from "../../constants";
import { AuthStackParams, routeNames } from "../../types";
import { pickImageFromLibrary } from "../../utils";

export interface Props {
    navigation: StackNavigationProp<AuthStackParams, routeNames.SignUp>;
}

const SignUp: FC<Props> = ({ navigation }) => {
    const [profileImageData, setProfileImageData] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const gotoLoginScreen = () => navigation.navigate(routeNames.Login);
    const pickProfileImage = async () => {
        try {
            const res = await pickImageFromLibrary();
            const uriSplits = res.uri.split("/");
            const fileName = uriSplits[uriSplits.length - 1];
            const fileNameSplits = fileName.split(".");
            const fileExt = fileNameSplits[fileNameSplits.length - 1];
            setProfileImageData(`data:image/${fileExt};base64,${res.base64}`);
        } catch (error) {
            console.log("Error in Picking Image: ", error);
        }
    };

    const onNameValueChanged = (text: string) => {
        setName(text);
    };
    const onEmailValueChanged = (text: string) => {
        setEmail(text);
    };
    const onPasswordValueChanged = (text: string) => {
        setPassword(text);
    };
    const onConfirmPasswordValueChanged = (text: string) => {
        setConfirmPassword(text);
    };

    return (
        <ScreenContainer
            backgroundColor={Colors.black}
            barStyle="light-content"
        >
            <ImageBackground
                source={Images.authBg}
                style={styles.bg}
                imageStyle={styles.bgImage}
            >
                <View style={[styles.f1, styles.bgOverlay]}>
                    <TouchableOpacity
                        style={styles.profileImageWrapper}
                        onPress={pickProfileImage}
                    >
                        <BlurView
                            intensity={100}
                            style={styles.profileImageContainer}
                        >
                            {!profileImageData ? (
                                <Icons.Feather
                                    name="user"
                                    color={Colors.white}
                                    size={responsiveFontSize(5)}
                                />
                            ) : (
                                <Image
                                    source={{
                                        uri: profileImageData,
                                    }}
                                    style={styles.profileImage}
                                />
                            )}
                        </BlurView>
                        <View style={styles.upArrowWrapper}>
                            <Icons.AntDesign
                                name="arrowup"
                                color={Colors.white}
                                size={responsiveFontSize(3)}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.f1, styles.contentContainer]}>
                        <AuthTextInput
                            iconType="user"
                            value={name}
                            containerStyle={styles.textInput}
                            placeholder="Name"
                            onChangeText={onNameValueChanged}
                        />
                        <AuthTextInput
                            iconType="email"
                            value={email}
                            containerStyle={styles.textInput}
                            placeholder="Email"
                            keyboardType="email-address"
                            onChangeText={onEmailValueChanged}
                        />
                        <AuthTextInput
                            iconType="password"
                            value={password}
                            containerStyle={styles.textInput}
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={onPasswordValueChanged}
                        />
                        <AuthTextInput
                            iconType="password"
                            value={confirmPassword}
                            containerStyle={styles.textInput}
                            placeholder="Confirm Password"
                            secureTextEntry
                            onChangeText={onConfirmPasswordValueChanged}
                        />
                        <Button style={styles.registerBtn} title="Register" />
                        <View style={styles.loginTextWrapper}>
                            <Text style={styles.alreadyHaveAccountText}>
                                Already have an Account?{" "}
                            </Text>
                            <TouchableOpacity onPress={gotoLoginScreen}>
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    f1: {
        flex: 1,
    },
    bg: {
        height: responsiveHeight(100),
        width: responsiveWidth(100),
    },
    bgImage: {
        height: "100%",
        width: "100%",
    },
    bgOverlay: {
        backgroundColor: "rgba(0,0,0, 0.5)",
        alignItems: "center",
    },
    profileImageWrapper: {
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(3),
    },
    profileImageContainer: {
        height: responsiveWidth(35),
        width: responsiveWidth(35),
        borderRadius: responsiveWidth(35) / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    profileImage: {
        height: responsiveWidth(35),
        width: responsiveWidth(35),
        borderRadius: responsiveWidth(35) / 2,
    },
    upArrowWrapper: {
        position: "absolute",
        right: responsiveWidth(2.5),
        bottom: responsiveHeight(0.5),
        height: responsiveWidth(8),
        width: responsiveWidth(8),
        borderRadius: responsiveWidth(8) / 2,
        backgroundColor: Colors.primary,
        borderWidth: responsiveWidth(0.3),
        borderColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
    },
    contentContainer: {
        width: "90%",
        alignItems: "center",
    },
    logo: {
        height: responsiveWidth(55),
        width: responsiveWidth(55),
        resizeMode: "contain",
    },
    bottomView: {
        height: "55%",
        width: "80%",
    },
    textInput: {
        marginBottom: responsiveHeight(2),
    },
    registerBtn: {
        width: "100%",
        marginTop: responsiveHeight(4),
        paddingVertical: responsiveHeight(2),
    },
    loginTextWrapper: {
        position: "absolute",
        bottom: responsiveHeight(3),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    alreadyHaveAccountText: {
        color: Colors.white,
    },
    loginText: {
        color: Colors.primary,
    },
});

export default SignUp;
