import {tesloApi} from "@/api/teslo.api.ts";
import type {ProductsResponse} from "@/interfaces/products.response.ts";

export const getProductsAction = async () => {
    const {data} = await tesloApi.get<ProductsResponse>('/products');
    const productsWithImageUrl = data.products.map(product => ({
        ...product,
        images: product.images.map(
            (image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`
        )
    }));

    return {
        ...data,
        products: productsWithImageUrl,
    }
}