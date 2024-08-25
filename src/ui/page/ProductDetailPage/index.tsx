import {useEffect, useState} from "react";
import {ProductDetailDto} from "../../../data/product/Product.type.ts";
import * as EshopApi from "../../../api/EshopApi.ts";
import TopNavBar from "../../component/TopNavBar.tsx";
import {Container} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import Banner from "../ProductListingPage/component/Banner.tsx";
import ProductDetailContainer from "./component/ProductDetailContainer.tsx";
import LoadingContainer from "../../component/LoadingContainer.tsx";

type Params = {
    productId: string
}

export default function ProductDetailPage() {
    const navigate = useNavigate();
    const params = useParams<Params>()
    const [productDetailDto, setProductDetailDto] = useState<ProductDetailDto | undefined>(undefined);

    const getProductByPid = async () => {
        try {
            if (params.productId) {
                const responseData = await EshopApi.getProductByPid(params.productId);
                setProductDetailDto(responseData);
                document.title = responseData.name;
            }
        } catch (err) {
            console.error(err);
            navigate("/error");
        }
    }


    useEffect(() => {
        getProductByPid()
    }, []);

    return (
        <>
            <TopNavBar/>
            <Container>
                <Banner/>
                {
                    productDetailDto
                        ? <ProductDetailContainer productDetailDto={productDetailDto}/>
                        : <LoadingContainer/>
                }
            </Container>
        </>
    )
}