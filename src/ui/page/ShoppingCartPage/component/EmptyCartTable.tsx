import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

export default function EmptyCartTable(){
    return(
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
                        <Typography
                            sx={{
                                height: "70px",
                                margin: "10px",
                                pl: "20px",
                                pt: "20px"
                            }}>
                            Your shopping cart is empty
                        </Typography>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}