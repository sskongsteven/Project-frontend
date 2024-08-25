import axios from "axios";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts";
import {CartItemDto} from "../data/cartItem/CartItem.type.ts";


const baseUrl = "http://localhost:8080";


export const getUserCart = async () => {
    const response = await axios.get<CartItemDto[]>(
        `${baseUrl}/cart`,
        await FirebaseAuthService.getAuthConfig()
    );
    return response.data
}

export const putCartItem = async (pid: number, quantity: number) => {
    await axios.put(
        `${baseUrl}/cart/${pid}/${quantity}`,
        null,
        await FirebaseAuthService.getAuthConfig()
    )
}