import {Box} from "@mui/material";
import TopNavBar from "../../component/TopNavBar.tsx";

export default function ErrorPage() {
    return (
        <>
            <TopNavBar/>
            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "85vh"
                }}
            >
                <Box
                    style={{
                        width: 600,
                        height: 600,
                        backgroundImage: "url(https://i.imgur.com/HsSXJOt.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain"
                    }}
                >
                </Box>
            </Box>
        </>
    )
}