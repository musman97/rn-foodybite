import React, { FC, useState } from "react";
import {
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
    ActivityIndicator,
    StyleProp,
    TouchableOpacityProps,
    ActivityIndicatorProps,
} from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Colors, Fonts } from "../../constants";

export interface Props extends TouchableOpacityProps, ActivityIndicatorProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    loading?: boolean;
}

const Button: FC<Props> = ({
    title,
    style,
    textStyle,
    size,
    loading,
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles.container, style]} {...props}>
            {!loading ? (
                <Text style={[styles.text, textStyle]}>{title}</Text>
            ) : (
                <ActivityIndicator
                    color={Colors.white}
                    size={size}
                    animating={true}
                />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(2),
        borderRadius: responsiveWidth(50) / 16,
    },
    text: {
        color: Colors.white,
        fontFamily: Fonts.bold,
    },
});

export default Button;
