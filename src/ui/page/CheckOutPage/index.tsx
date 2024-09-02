import TopNavBar from "../../component/TopNavBar.tsx";
import {Button, Container, Stack, Typography} from "@mui/material";
import CheckOutTable from "./component/CheckOutTable.tsx";
import {useContext, useEffect, useState} from "react";
import {TransactionDto} from "../../../data/transaction/Transaction.type.ts";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import {useNavigate, useParams} from "react-router-dom";
import * as TransactionApi from "../../../api/TransactionApi.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import LoadingBackdrop from "../../component/LoadingBackdrop.tsx";

type Params = {
    transactionId: string
}

export default function CheckOutPage() {
    const [transactionDto, setTransactionDto] = useState<TransactionDto | undefined>(undefined);
    const [loadingBackDropOpen, setLoadingBackDropOpen] = useState<boolean>(false);

    const loginUser = useContext(LoginUserContext);

    const navigate = useNavigate();
    const {transactionId} = useParams<Params>();

    const getTransactionByTid = async () => {
        if (!transactionId) {
            navigate("/error")
        }

        try {
            const responseData = await TransactionApi.getTransactionByTid(transactionId!);
            setTransactionDto(responseData);
        }catch (err){
            console.error(err);
            navigate("/error");
        }
    }

    const handleCheckOut = async () => {
        if (!transactionId) {
            navigate("/error")
        }

        try{
            setLoadingBackDropOpen(true);
            await TransactionApi.payTransaction(transactionId!);
            await TransactionApi.finishTransaction(transactionId!);
            navigate("/thankyou");
        }catch (err){
            console.error(err);
            navigate("/error");
        }
    }

    useEffect(() => {
        if(loginUser) {
            getTransactionByTid()
        } else if(loginUser === null) {
            navigate("/")
        }
    }, [loginUser]);

    const renderCheckOutContainer = () => {
        if (transactionDto) {
            return (
                <Container sx={{py: 2}}>
                    <CheckOutTable transactionDto={transactionDto}/>
                    <Stack direction="row" justifyContent="space-between" sx={{my: 2}}>
                        <Typography
                            variant="h5"
                            sx={{
                                color:"white"
                            }}
                        >
                            Total: ${transactionDto.total.toLocaleString()}
                        </Typography>
                        <Button
                            size="large"
                            variant="contained"
                            onClick={handleCheckOut}
                            color="error"
                        >
                            CheckOut
                        </Button>
                    </Stack>
                </Container>
            )
        } else {
            return (
                <LoadingContainer/>
            )
        }
    }

    return (
        <>
            <TopNavBar/>
            {renderCheckOutContainer()}
            <LoadingBackdrop open={loadingBackDropOpen}/>
        </>
    )
}