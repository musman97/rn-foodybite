import { setCustomText, setCustomTextInput } from "react-native-global-props";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { Fonts } from "./src/constants";

const customProps = {
    style: {
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(2),
    },
};

setCustomText(customProps);
setCustomTextInput(customProps);
