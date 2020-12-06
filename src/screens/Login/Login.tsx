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
import { AuthTextInput, ScreenContainer } from "../../components";
import Button from "../../components/Button/Button";
import { Colors, Images } from "../../constants";
import { AuthStackParams, routeNames } from "../../types";

export interface Props {
    navigation: StackNavigationProp<AuthStackParams, routeNames.Login>;
}

const Login: FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const gotoSignUpScreen = () => {
        navigation.navigate(routeNames.SignUp);
    };

    const onEmailValueChanged = (text: string) => {
        setEmail(text);
    };
    const onPasswordValueChanged = (text: string) => {
        setPassword(text);
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
                    <View style={styles.topView}>
                        <Image source={Images.logoWhite} style={styles.logo} />
                    </View>
                    <View style={styles.bottomView}>
                        <AuthTextInput
                            iconType="email"
                            value={email}
                            containerStyle={styles.textInput}
                            placeholder="Email"
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
                        <TouchableOpacity>
                            <Text style={styles.forgetPasswordText}>
                                Forget Password?
                            </Text>
                        </TouchableOpacity>
                        <Button style={styles.loginBtn} title="Login" />
                        <View style={styles.signUpTextWrapper}>
                            <Text style={styles.dontHaveAccountText}>
                                Don't have an Account?{" "}
                            </Text>
                            <TouchableOpacity onPress={gotoSignUpScreen}>
                                <Text style={styles.signUpText}>Sign Up</Text>
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
    topView: {
        height: "45%",
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
    forgetPasswordText: {
        color: Colors.white,
        alignSelf: "flex-end",
    },
    loginBtn: {
        marginTop: responsiveHeight(4),
        paddingVertical: responsiveHeight(2),
    },
    signUpTextWrapper: {
        position: "absolute",
        bottom: responsiveHeight(3),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    dontHaveAccountText: {
        color: Colors.white,
    },
    signUpText: {
        color: Colors.primary,
    },
});

export default Login;
