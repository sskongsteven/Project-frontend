import axios from "axios";
import {GetAllProductDto, ProductDetailDto} from "../data/product/Product.type.ts";

const baseUrl = "http://localhost:8080";

export const getAllProduct = async () => {
        const response = await axios.get<GetAllProductDto>(`${baseUrl}/public/product`);
        return response.data;
}

export const getProductByPid = async (pid: string) => {

        const response = await axios.get<ProductDetailDto>(`${baseUrl}/public/product/${pid}`);
        return response.data
}