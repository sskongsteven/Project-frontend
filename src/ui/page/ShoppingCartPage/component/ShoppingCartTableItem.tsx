import {Box, TableCell, TableRow} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {CartItemDto} from "../../../../data/cartItem/CartItem.type.ts";
import QuantitySelector from "../../../component/Quantity Selector.tsx";
import * as CartItemApi from "../../../../api/CartItemApi.ts";

type Props = {
    cartItemDto: CartItemDto
    handleQuantityChange: (pid: number, quantity: number) => void;
    deleteCartItem: (pid: number) => void;
}

export default function ShoppingCartTableItem({
                                                  cartItemDto,
                                                  handleQuantityChange,
                                                  deleteCartItem
                                              }: Props) {
    // const [isQuantityUpdating, setIsQuantityUpdating] = useState<boolean>(false);

    // Optimistic
    const handleQuantityMinusOne = async () => {
        if (cartItemDto.cartQuantity > 1) {
            const updatedQuantity = cartItemDto.cartQuantity - 1
            handleQuantityChange(cartItemDto.pid, updatedQuantity);
            await CartItemApi.patchCartQuantity(cartItemDto.pid, updatedQuantity);
        }
    }

    // Optimistic
    const handleQuantityPlusOne = async () => {
        if (cartItemDto.cartQuantity < cartItemDto.stock) {
            const updatedQuantity = cartItemDto.cartQuantity + 1
            handleQuantityChange(cartItemDto.pid, updatedQuantity);
            await CartItemApi.patchCartQuantity(cartItemDto.pid, updatedQuantity);
        }
    }

    // Optimistic
    const handleCartItemDelete = async () => {
        const pid = cartItemDto.pid
        deleteCartItem(pid);
        await CartItemApi.deleteCartItem(pid);
    }

    return (
        <TableRow>
            <TableCell>
                <Box
                    component="img"
                    src={cartItemDto.imageUrl}
                    alt={cartItemDto.name}
                    sx={{
                        width: "calc(100% - 20px)",
                        height: "200px",
                        objectFit: "contain",
                        margin: "10px"
                    }}
                />
            </TableCell>
            <TableCell>
                {cartItemDto.name}
            </TableCell>
            <TableCell>
                ${cartItemDto.price.toLocaleString()}
            </TableCell>
            <TableCell>
                <QuantitySelector
                    quantity={cartItemDto.cartQuantity}
                    handleMinus={handleQuantityMinusOne}
                    handleAdd={handleQuantityPlusOne}
                    // isLoading={isQuantityUpdating}
                />
            </TableCell>
            <TableCell>
                ${cartItemDto.price * cartItemDto.cartQuantity}
            </TableCell>
            <TableCell>
                <DeleteForeverIcon
                    color="error"
                    onClick={handleCartItemDelete}
                />
            </TableCell>
        </TableRow>
    )
}