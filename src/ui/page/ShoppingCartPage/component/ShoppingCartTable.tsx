import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import ShoppingCartTableItem from "./ShoppingCartTableItem.tsx";
import {CartItemDto} from "../../../../data/cartItem/CartItem.type.ts";

type Props = {
    cartItemDtoList: CartItemDto[];
}

export default function ShoppingCartTable({cartItemDtoList}:Props) {
    return (
        <>
            <Typography
                variant="h5"
                sx={{
                    mb:3,
                    ml:3,
                    mt:10,
                    fontWeight: "bold"
                }}
            >
                Your Shopping Cart
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Unit Price</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Sub Total</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cartItemDtoList.map((value)=>(
                                <ShoppingCartTableItem key={value.pid} cartItemDto={value}/>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}