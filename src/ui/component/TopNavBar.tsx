import {
    AppBar,
    Box,
    Button,
    CircularProgress,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartDrawer from "./ShoppingCartDrawer.tsx";

export default function TopNavBar() {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

    const loginUser = useContext(LoginUserContext);
    const navigate = useNavigate();

    const closeDrawer = () => {
        setDrawerOpen(false);
    }

    const renderLoginContainer = () => {
        if (loginUser) {
            return (
                <>
                    <Typography
                        variant="body1"
                        sx={{
                            mr: 1
                        }}
                    >
                        {loginUser.email}
                    </Typography>
                    <IconButton
                        color="warning"
                        sx={{
                            mr:1
                        }}
                        onClick={() => {
                            setDrawerOpen(true);
                        }}
                    >
                        <ShoppingCartIcon/>
                    </IconButton>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={()=>{
                            FirebaseAuthService.handleSignOut()
                        }}
                    >
                        Logout
                    </Button>
                </>
            )
        } else if (loginUser === null) {
            return (
                <Button
                    color="inherit"
                    onClick={() => {
                        navigate("/login")
                    }}
                >
                    Login
                </Button>
            )
        } else {
            return (
                <CircularProgress color="inherit"/>
            )
        }
    }

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: "black"
                    }}
                >
                    <Toolbar>
                        <Link to="/">
                            <Box
                                component="img"
                                src={"https://i.imgur.com/dZnFSvx.png"}
                                sx={{
                                    height: '70px',
                                    width: 'auto'
                                }}
                            />
                        </Link>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            BitterSweet E-shop
                        </Typography>
                        {renderLoginContainer()}
                    </Toolbar>
                </AppBar>
            </Box>
            <ShoppingCartDrawer open={drawerOpen} closeDrawer={closeDrawer}/>
        </>
    )
}