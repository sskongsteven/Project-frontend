import {Box, Button, Divider, Paper, Stack, Typography} from "@mui/material";
import QuantitySelector from "../../../component/Quantity Selector.tsx";
import {ProductDetailDto} from "../../../../data/product/Product.type.ts";
import {useContext, useState} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.ts";
import {useNavigate} from "react-router-dom";
import * as CartItemApi from "../../../../api/CartItemApi.ts"
import AddToCartSuccessSnackBar from "./AddToCartSuccessSnackBar.tsx";

type Props = {
    productDetailDto: ProductDetailDto
}

export default function ProductDetailContainer({productDetailDto}: Props) {
    const [quantity, setQuantity] = useState<number>(1)
    const loginUser = useContext(LoginUserContext);
    const navigate = useNavigate();
    const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity((prevState) => (
                prevState - 1
            ));
        }
    }

    const handleAdd = () => {
        if (quantity < productDetailDto.stock) {
            setQuantity((prevState) => (
                prevState + 1
            ));
        }
    }

    const handleAddToCart = async () => {
        try {
            if (!loginUser) {
                navigate("/login")
            } else {
                setIsAddingToCart(true)
                await CartItemApi.putCartItem(productDetailDto.pid, quantity)
                setSnackbarOpen(true);
                setIsAddingToCart(false)
            }
        } catch (err) {
            console.error(err);
        }
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    }

    const renderAddToCartContainer = () => {
        if (productDetailDto.stock > 0) {
            return (
                <Stack direction="row">
                    <QuantitySelector
                        quantity={quantity}
                        handleMinus={handleMinus}
                        handleAdd={handleAdd}
                    />
                    <Button
                        color="success"
                        variant="contained"
                        onClick={handleAddToCart}
                        disabled={isAddingToCart}
                    >
                        Add to cart
                    </Button>
                </Stack>
            )
        } else {
            return <Typography variant="body1" color="red">This product is out of stock</Typography>
        }
    }


    return (
        <>
            <Paper
                sx={{
                    mt: 3,
                    p: 3,
                    mb: 5
                }}
            >
                <Stack
                    direction={{
                        md: "row",
                        sm: "column"
                    }}
                    divider={<Divider orientation="vertical" flexItem/>}
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Box
                        component="img"
                        src={productDetailDto.imageUrl}
                        alt={productDetailDto.name}
                        sx={{
                            width: "30%",
                            height: "300px",
                            objectFit: "contain",
                            margin: "10px"
                        }}
                    />
                    <Box>
                        <Typography variant="h6">
                            {productDetailDto.name}
                        </Typography>

                        <Typography variant="body2" sx={{whiteSpace: "pre-line"}}>
                            {productDetailDto.description}<br/><br/>
                        </Typography>

                        <Typography variant="body1">
                            Price: ${productDetailDto.price.toLocaleString()}<br/>
                        </Typography>
                        {renderAddToCartContainer()}
                    </Box>
                </Stack>
            </Paper>
            <AddToCartSuccessSnackBar open={snackbarOpen} handleClose={handleSnackbarClose}/>
        </>
    )
}