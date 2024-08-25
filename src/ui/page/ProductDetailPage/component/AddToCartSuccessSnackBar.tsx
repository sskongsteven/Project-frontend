import {Alert, Snackbar} from "@mui/material";

type Props = {
    open: boolean,
    handleClose: () => void
}

export default function AddToCartSuccessSnackBar({open, handleClose}: Props) {

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{vertical: "top", horizontal: "right"}}
            sx={{mt: 8}}
        >
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{width: '100%'}}
            >
                Item successfully added to cart
            </Alert>
        </Snackbar>
    )

}