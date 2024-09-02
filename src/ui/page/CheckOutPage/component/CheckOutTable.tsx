import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {TransactionDto} from "../../../../data/transaction/Transaction.type.ts";
import CheckOutTableItem from "./CheckOutTableItem.tsx";

type Props = {
    transactionDto: TransactionDto
}

export default function CheckOutTable({transactionDto}: Props) {
    return (
        <>
            <Typography
                variant="h5"
                sx={{
                    mb: 3,
                    ml: 3,
                    mt: 10,
                    fontWeight: "bold",
                    color: "white"
                }}
            >
                Checkout Payment Detail
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Unit Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Sub-Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            transactionDto.items.map((value) => (
                                <CheckOutTableItem key={value.tpid} transactionItemDto={value}/>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}