import {Box, TableCell, TableRow} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {CartItemDto} from "../../../../data/cartItem/CartItem.type.ts";
import QuantitySelector from "../../../component/Quantity Selector.tsx";

type Props = {
    cartItemDto: CartItemDto
}

export default function ShoppingCartTableItem({cartItemDto}: Props) {
    return (
        <TableRow>
            <TableCell>
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
            </TableCell>
            <TableCell>
                {cartItemDto.name}
            </TableCell>
            <TableCell>
                ${cartItemDto.price.toLocaleString()}
            </TableCell>
            <TableCell>
                <QuantitySelector
                    quantity={cartItemDto.cartQuantity}
                    handleMinus={() => {

                    }}
                    handleAdd={() => {

                    }}
                />
            </TableCell>
            <TableCell>
                ${cartItemDto.price * cartItemDto.cartQuantity}
            </TableCell>
            <TableCell>
                <DeleteForeverIcon/>
            </TableCell>
        </TableRow>
    )
}