import {CustomJumbotron} from "@/shop/components/CustomJumbotron.tsx";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {ProductsGrid} from "@/shop/components/ProductsGrid.tsx";
import {products} from "@/mocks/products.mock.ts";


export const HomePage = () => {
    return (
        <>
            <CustomJumbotron title="Todos los productos" />
            <ProductsGrid products={products} />
            <CustomPagination totalPages={5} />
        </>
    );
};