import './App.css'
import {router} from "./config/router/ReactRouterConfig.tsx";
import {RouterProvider} from "react-router-dom";
import {useEffect, useState} from "react";
import {UserData} from "./data/user/User.type.ts";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts";
import {LoginUserContext} from "./context/LoginUserContext.ts";

function App() {
    const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);

    useEffect(() => {
        FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
    }, [])

    return (
        <>
            <LoginUserContext.Provider value={loginUser}>
                <RouterProvider router={router}/>
            </LoginUserContext.Provider>
        </>
    )
}

export default App
