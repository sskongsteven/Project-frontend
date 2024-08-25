import {Box} from "@mui/material";

export default function Banner() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                my: 7,
            }}>
            <Box
                component="img"
                src={"https://i.imgur.com/dZnFSvx.png"}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '350px',
                    width: 'auto',
                }}
            />
        </Box>
    )
}