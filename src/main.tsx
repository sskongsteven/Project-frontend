import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme.ts";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts";

FirebaseAuthService.serviceInit();

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
)
