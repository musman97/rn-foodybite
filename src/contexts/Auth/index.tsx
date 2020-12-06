import React, { createContext, FC, useState } from "react";
import { AuthContextValue } from "../../types";

const defaultValue: AuthContextValue = {};
const AuthContext = createContext(defaultValue);

export default AuthContext;

export const AuthContextProvider: FC<{}> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isUserPresent, setisUserPresent] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoading, isUserPresent }}>
            {children}
        </AuthContext.Provider>
    );
};
