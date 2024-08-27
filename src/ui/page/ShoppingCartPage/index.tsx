import TopNavBar from "../../component/TopNavBar.tsx";
import {Button, Container, Stack, Typography} from "@mui/material";
import ShoppingCartTable from "./component/ShoppingCartTable.tsx";
import {useContext, useEffect, useState} from "react";
import {CartItemDto} from "../../../data/cartItem/CartItem.type.ts";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {useNavigate} from "react-router-dom";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";


export default function ShoppingCartPage() {
    const [cartItemDtoList, setCartItemDtoList] = useState<CartItemDto[] | undefined>(undefined);
    const navigate = useNavigate();
    const loginUser = useContext(LoginUserContext);

    const calTotal = (cartItemDtoList: CartItemDto[]) => {
        return cartItemDtoList.reduce((total, currentValue) => (
            total + currentValue.cartQuantity * currentValue.price
        ), 0)
    }

    const getUserCart = async () => {
        try {
            const responseDataList = await CartItemApi.getUserCart();
            setCartItemDtoList(responseDataList);
        } catch (err) {
            console.log(err)
            navigate("/error")
        }
    }

    const changeQuantity = (pid: number, quantity: number) => {
        const updatedDtoList = cartItemDtoList?.map((value) => {
            if (value.pid === pid) {
                value.cartQuantity = quantity;
            }
            return value;
        })
        setCartItemDtoList(updatedDtoList);
    }

    const deleteCartItem = (pid: number) => {
        const updatedDtoList = cartItemDtoList?.filter((value) => (
            value.pid !== pid
        ));
        setCartItemDtoList(updatedDtoList);
    }

    const renderCartContainer = () => {
        if (cartItemDtoList && cartItemDtoList.length > 0) {
            return (
                <>
                    <ShoppingCartTable cartItemDtoList={cartItemDtoList} changeQuantity={changeQuantity}
                                       deleteCartItem={deleteCartItem}/>
                    <Stack direction="row" justifyContent="space-between" sx={{my: 2}}>
                        <Typography variant="h5">Total: ${calTotal(cartItemDtoList).toLocaleString()}</Typography>
                        <Button size="large">Payyyyyyyyyyyyyyyy</Button>
                    </Stack>
                </>
            )
        } else if (cartItemDtoList && cartItemDtoList.length === 0){
            return (
                <Typography variant="h1">Empty Cart</Typography>
            )
        } else {
            return (
                <LoadingContainer/>
            )
        }
    }

    useEffect(() => {
        if (loginUser) {
            getUserCart();
        } else if (loginUser === null) {
            navigate("/login")
        }
    }, [loginUser]);

    return (
        <>
            <TopNavBar/>
            <Container sx={{mt: 2, mb: 5}}>
                {
                    renderCartContainer()
                }
            </Container>
        </>
    )
}