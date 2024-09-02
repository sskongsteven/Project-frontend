import TopNavBar from "../../component/TopNavBar.tsx";
import {Box, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ThankYouPage() {
    const [counter, setCounter] = useState<number>(5);
    const navigate = useNavigate();

    const t = setTimeout(() => {
        setCounter((prevState) => (
            prevState - 1
        ))
    }, 1000);

    useEffect(() => {
        if(counter === 0){
            navigate("/")
        }

        return () => {
            clearTimeout(t);
        }
    }, [counter]);

    return (
        <>
            <TopNavBar/>
            <Container>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="85vh"
                    flexDirection="column"
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color:"white"
                        }}
                    >
                        Payment Success!
                    </Typography><Typography
                        variant="h5"
                        sx={{
                            color:"white"
                        }}
                    >
                        Back to home page in {counter} seconds
                    </Typography>
                    <Box
                        component="img"
                        src={"https://i.imgur.com/ia4sngh.png"}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '350px',
                            width: 'auto',
                        }}
                    />
                </Box>
            </Container>
        </>
    )
}