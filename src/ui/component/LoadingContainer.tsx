import {Box} from "@mui/material";

export default function LoadingContainer() {
    return (
        <Box
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "85vh"
            }}
        >
            <img src="https://i.imgur.com/xDsmp87.gif"/>
        </Box>
    )
}