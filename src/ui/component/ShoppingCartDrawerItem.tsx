import {Box, Stack, Typography} from "@mui/material";
import {CartItemDto} from "../../data/cartItem/CartItem.type.ts";

type Props = {
    cartItemDto: CartItemDto
}

export default function ShoppingCartDrawerItem({cartItemDto}:Props){
    return(
        <>
            <Stack direction="column">
                <Box
                    component="img"
                    src={cartItemDto.imageUrl}
                    alt={cartItemDto.name}
                    sx={{
                        width: "calc(100% - 20px)",
                        height: "200px",
                        objectFit: "contain",
                        margin: "10px"
                    }}
                />
                <Typography variant="h5" width={400}>
                    {cartItemDto.name}
                </Typography>
                <Typography variant="body1">
                    ${cartItemDto.price.toLocaleString()}
                </Typography>
                <Typography variant="body1">
                    Quantity: {cartItemDto.cartQuantity}
                </Typography>
            </Stack>
        </>
    )
}