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
            <img src="https://cdn.dribbble.com/users/1053052/screenshots/3600670/media/049491d00605f54d441aa47b9b419910.gif"/>
        </Box>
    )
}