import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {GetAllProductDto} from "../../../../data/product/Product.type.ts";
import {useNavigate} from "react-router-dom";

type Props = {
    getAllProductDto: GetAllProductDto
}

export default function ProductListCard({getAllProductDto}: Props) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${getAllProductDto.pid}`);
    }

    return (
        <Card sx={{
            width: 800,
            height: 450,
            display: "flex",
            flexDirection: "column",
            cursor: "pointer"
        }}
              onClick={handleCardClick}
        >
            <CardMedia
                component="div"
                // sx={{
                //     backgroundImage: `url(https://i.imgur.com/6cgpNZQ.png)`,
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center'
                // }}
            >
                <Box
                    component="img"
                    src={getAllProductDto.imageUrl}
                    alt={getAllProductDto.name}
                    sx={{
                        width: "calc(100% - 20px)",
                        height: "200px",
                        objectFit: "contain",
                        margin: "10px"
                    }}
                />

                <CardContent
                    sx={{
                        flexGrow: 1
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        height={96}
                        sx={{whiteSpace: "pre-line"}}
                    >
                        {getAllProductDto.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        ${getAllProductDto.price.toLocaleString()}<br/><br/>
                        {getAllProductDto.hasStock ? "In stock" : "Out of stock"}
                    </Typography>
                </CardContent>
            </CardMedia>
        </Card>
    );
}