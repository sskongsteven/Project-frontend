import {createBrowserRouter} from "react-router-dom";
import ProductListingPage from "../../ui/page/ProductListingPage";
import ProductDetailPage from "../../ui/page/ProductDetailPage";
import ErrorPage from "../../ui/page/ErrorPage";
import LoginPage from "../../ui/page/LoginPage";
import ShoppingCartPage from "../../ui/page/ShoppingCartPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListingPage/>
    },
    {
        path: "/product/:productId",
        element: <ProductDetailPage/>
    },
    {
        path: "/shoppingcart",
        element: <ShoppingCartPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
//   {
//     path: "/checkout/:transactionId",
//     element: <Checkout/>
//   },
    {
        path: "/error",
        element: <ErrorPage/>
    }
])
