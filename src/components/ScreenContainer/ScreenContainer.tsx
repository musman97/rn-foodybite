import React, { FC } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    StatusBarProps,
    SafeAreaView,
    StyleProp,
    ViewStyle,
} from "react-native";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";

export interface Props extends StatusBarProps {
    style?: StyleProp<ViewStyle>;
    addTopPadding?: boolean;
}

const ScreenContainer: FC<Props> = ({
    children,
    addTopPadding,
    style,
    ...props
}) => {
    return (
        <SafeAreaView>
            <StatusBar {...props} />
            <View
                style={[
                    styles.f1,
                    addTopPadding ? styles.topPadding : {},
                    style,
                ]}
            >
                {children}
            </View>
        </SafeAreaView>
    );
};

ScreenContainer.defaultProps = {
    addTopPadding: false,
};

const styles = StyleSheet.create({
    f1: {
        flex: 1,
    },
    topPadding: {
        paddingTop: StatusBar.currentHeight,
    },
});

export default ScreenContainer;
