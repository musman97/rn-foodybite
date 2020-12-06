import React from "react";
import { AuthContextProvider } from "./src/contexts/Auth";
import RootNav from "./src/navigation";

export default function App() {
    return (
        <AuthContextProvider>
            <RootNav />
        </AuthContextProvider>
    );
}
