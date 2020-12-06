import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import { Images, Colors } from "../../constants";
import { AuthStackParams, routeNames } from "../../types";

export interface Props {}

const Splash: FC<Props> = ({}) => {
    useEffect(() => {}, []);

    return (
        <ScreenContainer
            translucent
            backgroundColor={Colors.screenPrimaryBg}
            barStyle="dark-content"
            addTopPadding={true}
        >
            <ImageBackground source={Images.splashBg} style={styles.bg}>
                <Image source={Images.splashLogo} style={styles.logo} />
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
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
    },
    bgImage: {
        height: "100%",
        width: "100%",
    },
    logo: {
        height: responsiveWidth(60),
        width: responsiveWidth(60),
        resizeMode: "contain",
    },
});

export default Splash;
