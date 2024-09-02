import {Box, TableCell, TableRow} from "@mui/material";
import {TransactionItemDto} from "../../../../data/transaction/Transaction.type.ts";

type Props = {
    transactionItemDto: TransactionItemDto
}

export default function CheckOutTableItem({transactionItemDto}: Props) {
    return (
        <TableRow>
            <TableCell>
                <Box
                    component="img"
                    src={transactionItemDto.product.imageUrl}
                    alt={transactionItemDto.product.name}
                    sx={{
                        width: "calc(100% - 20px)",
                        height: "200px",
                        objectFit: "contain",
                        margin: "10px"
                    }}
                />
            </TableCell>
            <TableCell>{transactionItemDto.product.name}</TableCell>
            <TableCell>${transactionItemDto.product.price.toLocaleString()}</TableCell>
            <TableCell>{transactionItemDto.quantity}</TableCell>
            <TableCell>${transactionItemDto.subtotal}</TableCell>
        </TableRow>
    )
}