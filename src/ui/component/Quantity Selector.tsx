import {Box, IconButton, Stack, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type Props = {
    quantity: number,
    handleMinus: () => void,
    handleAdd: () => void,
    isLoading?: boolean
}

export default function QuantitySelector(
    {quantity, handleAdd, handleMinus, isLoading = false}
        : Props) {


    return (
        <Stack direction="row">
            <IconButton
                onClick={handleMinus}
                disabled={isLoading}
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
                disabled={isLoading}
            >
                <AddIcon/>
            </IconButton>
        </Stack>
    )
}