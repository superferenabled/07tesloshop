import {CustomJumbotron} from "@/shop/components/CustomJumbotron.tsx";
import {ProductsGrid} from "@/shop/components/ProductsGrid.tsx";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {useParams} from "react-router";
import {useProducts} from "@/shop/hooks/useProducts.tsx";

export const GenderPage = () => {

    const {gender} = useParams();
    const {data} = useProducts();
    const genderLabel = gender === "woman" ? "Mujer" : (gender === "men" ? "Hombre" : "Niños");
    return (
        <>
            <CustomJumbotron title={`Productos para ${genderLabel}`}/>
            <ProductsGrid products={data?.products || []}/>
            <CustomPagination totalPages={5}/>
        </>
    );
};