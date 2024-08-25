import {Box, IconButton, Stack, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type Props = {
    quantity: number,
    handleMinus: () => void,
    handleAdd: () => void
}

export default function QuantitySelector(
    {quantity, handleAdd, handleMinus}
        : Props) {


    return (
        <Stack direction="row">
            <IconButton
                onClick={handleMinus}
            >
                <RemoveIcon/>
            </IconButton>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minWidth="32px"
                minHeight="32px"
            >
                <Typography variant="body1">
                    {quantity}
                </Typography>
            </Box>
            <IconButton
                onClick={handleAdd}
            >
                <AddIcon/>
            </IconButton>
        </Stack>
    )
}