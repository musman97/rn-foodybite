import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParams, routeNames } from "../types";
import { globalStackScreenOptions } from "./config";
import { Login, SignUp } from "../screens";

const AuthStack = createStackNavigator<AuthStackParams>();

const AuthNav = () => (
    <AuthStack.Navigator screenOptions={globalStackScreenOptions}>
        <AuthStack.Screen name={routeNames.Login} component={Login} />
        <AuthStack.Screen name={routeNames.SignUp} component={SignUp} />
    </AuthStack.Navigator>
);

export default AuthNav;
