import TopNavBar from "../../component/TopNavBar.tsx";
import Banner from "./component/Banner.tsx";
import ProductListGrid from "./component/ProductListGrid.tsx";
import {useEffect, useState} from "react";
import {GetAllProductDto} from "../../../data/product/Product.type.ts";
import * as EshopApi from "../../../api/EshopApi.ts";
import {Container} from "@mui/material";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import {useNavigate} from "react-router-dom";

export default function ProductListingPage() {
    const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | undefined>(undefined);

    const navigate = useNavigate();

    const getProductInfo = async () => {
        try {
            const responseDataList = await EshopApi.getAllProduct();
            setGetAllProductDtoList(responseDataList);
        } catch (err){
            console.error(err)
            navigate("/error");
        }
    }


    useEffect(() => {
        getProductInfo()
        document.title = "BitterSweet E-shop"
    }, [])

    return (
        <>
            <TopNavBar/>
            <Banner/>
            <Container>
                {
                    getAllProductDtoList
                        ? <ProductListGrid getAllProductDtoList={getAllProductDtoList}/>
                        : <LoadingContainer/>
                }
            </Container>
        </>
    )
}