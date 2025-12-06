import {CustomJumbotron} from "@/shop/components/CustomJumbotron.tsx";
import {ProductsGrid} from "@/shop/components/ProductsGrid.tsx";
import {products} from "@/mocks/products.mock.ts";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {useParams} from "react-router";

export const GenderPage = () => {

    const {gender} = useParams();
    const genderLabel = gender === "woman" ? "Mujer" : (gender === "men" ? "Hombre" : "Niños");
    return (
        <>
            <CustomJumbotron title={`Productos para ${genderLabel}`} />
            <ProductsGrid products={products} />
            <CustomPagination totalPages={5} />
        </>
    );
};