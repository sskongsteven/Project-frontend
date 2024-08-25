import Grid from "@mui/material/Unstable_Grid2";
import ProductListCard from "./ProductListCard.tsx";
import {GetAllProductDto} from "../../../../data/product/Product.type.ts";

type Props = {
    getAllProductDtoList: GetAllProductDto[]
}

export default function ProductListGrid({getAllProductDtoList}: Props) {
    return (
        <Grid container spacing={2} mt={2}>
            {
                getAllProductDtoList.map((value) => (
                    <Grid lg={3} md={4} sm={6} xs={12}
                          key={value.pid}
                          display="flex" justifyContent="center" alignItems="center"
                    >
                        <ProductListCard
                            getAllProductDto={value}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}