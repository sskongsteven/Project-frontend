import {Button, Container, Divider, Drawer, Typography} from "@mui/material";
import {useState} from "react";
import {CartItemDto} from "../../data/cartItem/CartItem.type.ts";
import ShoppingCartDrawerItem from "./ShoppingCartDrawerItem.tsx";
import LoadingContainer from "./LoadingContainer.tsx";
import * as CartItemApi from "../../api/CartItemApi.ts";
import {useNavigate} from "react-router-dom";

type Props = {
    open: boolean,
    closeDrawer: () => void
}

export default function ShoppingCartDrawer({open, closeDrawer}: Props) {
    const [cartItemDtoList, setCartItemDtoList] = useState<CartItemDto[] | undefined>(undefined);
    const navigate = useNavigate();

    const getUserCart = async () => {
        setCartItemDtoList(undefined);
        const responseDataList = await CartItemApi.getUserCart();
        setCartItemDtoList(responseDataList);
    }

    const renderDrawerItem = () => {
        if (cartItemDtoList) {
            if (cartItemDtoList.length > 0) {
                return (
                    cartItemDtoList.map((value) => (
                        <>
                            <ShoppingCartDrawerItem cartItemDto={value}/>
                            <Divider sx={{my: 2}}></Divider>
                        </>
                    ))
                )
            } else {
                return (
                    <Typography>Your cart is empty</Typography>
                )
            }
        } else {
            return (
                <LoadingContainer/>
            )
        }
    }

    return (
        <Drawer anchor="right" open={open} onClose={closeDrawer} onTransitionEnter={getUserCart}>
            <Button
            onClick={()=>{
                navigate("/shoppingcart")
            }}
            >Cart</Button>
            <Divider sx={{my: 2}}></Divider>
            <Container>
                {
                    renderDrawerItem()
                }
            </Container>
        </Drawer>
    )
}