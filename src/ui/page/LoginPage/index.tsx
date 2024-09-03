import TopNavBar from "../../component/TopNavBar.tsx";
import {Alert, Box, Button, CircularProgress, Container, Divider, Paper, TextField, Typography} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts";
import {useNavigate} from "react-router-dom";
import {GoogleLoginButton} from "react-social-login-buttons";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);
    const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

    const loginUser = useContext(LoginUserContext)

    const navigate = useNavigate();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
    }

    const handleGoogleLogin = async () => {
        const loginResult = await FirebaseAuthService.handleSignInWithGoogle()
        if (loginResult) {
            navigate(-1);
        }
    }

    const renderLoginButton = () => {
        if (!isLoggingIn) {
            return (<Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 2,
                        height: "auto",
                        backgroundColor: "black",
                        '&:hover': {backgroundColor: 'lightgray'}
                    }}
                >
                    Login
                </Button>
            )
        } else {
            return (
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled
                    sx={{
                        mt: 2
                    }}
                >
                    <CircularProgress/>
                </Button>
            )
        }
    }

    const handleSignInWithEmailAndPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoggingIn(true)
        event.preventDefault();
        const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email, password);
        setIsLoggingIn(false)
        if (loginResult) {
            navigate("/");
        } else {
            setIsLoginFailed(true);
        }
    }

    useEffect(() => {
        if(loginUser){
            navigate("/")
        }
    }, [loginUser]);


    return (
        <>
            <TopNavBar/>
            <Container>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        mt: 12
                    }}
                >
                    <Paper
                        component="form"
                        onSubmit={handleSignInWithEmailAndPassword}
                        sx={{
                            width: "400px",
                            p: 3
                        }}

                    >
                        <Typography variant="h5">
                            Login to your account
                        </Typography>
                        {
                            isLoginFailed &&
                            <Alert severity="error" sx={{my: 2}}>Login Failed!</Alert>
                        }
                        <TextField
                            type="email"
                            label="Email"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <TextField
                            type="password"
                            label="Password"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {renderLoginButton()}
                        <Divider sx={{my: 2}}/>
                        <GoogleLoginButton
                            style={{
                                width: "100%",
                                margin: 0
                            }}
                            onClick={handleGoogleLogin}
                        >
                        </GoogleLoginButton>
                    </Paper>
                </Box>
            </Container>
        </>
    )
}