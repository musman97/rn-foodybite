import React, { FC } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInputProps,
    TextInput,
    StyleProp,
    ViewStyle,
} from "react-native";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { Colors, Icons } from "../../constants";

type IconType = "email" | "password" | "user";

export interface Props extends TextInputProps {
    containerStyle?: StyleProp<ViewStyle>;
    iconType: IconType;
}

const getIcon = (name: IconType) => (
    <Icons.Feather
        name={(() => {
            if (name === "email") {
                return "mail";
            }
            if (name === "user") {
                return "user";
            }
            if (name === "password") {
                return "lock";
            }
        })()}
        color={Colors.white}
        size={responsiveFontSize(3)}
    />
);

const AuthTextInput: FC<Props> = ({ containerStyle, iconType, ...props }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {getIcon(iconType)}
            <TextInput
                {...props}
                style={styles.textInput}
                placeholderTextColor={Colors.white}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    f1: {
        flex: 1,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(3),
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: responsiveWidth(50) / 20,
    },
    textInput: {
        color: Colors.white,
        marginHorizontal: responsiveWidth(2),
        flex: 1,
    },
});

export default AuthTextInput;
