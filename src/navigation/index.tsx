import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash } from "../screens";
import { routeNames, SplashStackParams } from "../types";
import { globalStackScreenOptions } from "./config";
import AuthNav from "./auth";
import AuthContext from "../contexts/Auth";

const SplashStack = createStackNavigator<SplashStackParams>();

const SplashNav = () => (
    <SplashStack.Navigator screenOptions={globalStackScreenOptions}>
        <SplashStack.Screen name={routeNames.Splash} component={Splash} />
    </SplashStack.Navigator>
);

const RootNav = () => {
    const { isLoading, isUserPresent } = useContext(AuthContext);
    const renderNav = () => {
        if (isLoading) {
            return <SplashNav />;
        }
        if (!isUserPresent) {
            return <AuthNav />;
        }
    };

    return <NavigationContainer>{renderNav()}</NavigationContainer>;
};

export default RootNav;
