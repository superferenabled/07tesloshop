import { tesloApi } from "@/api/teslo.api";
import type { Product } from "@/interfaces/product.interface";

export const getProductByIdAction = async (id: string): Promise<Product> => {
    if (!id) throw new Error('Product ID is required');
    if (id === 'new') {
        return {
            id: '',
            title: '',
            description: '',
            price: 0,
            images: [],
            sizes: [],
            slug: '',
            stock: 0,
            gender: 'unisex',
            tags: [],
        } as unknown as Product;
    }
    const { data } = await tesloApi.get<Product>(`/products/${id}`);

    const images = data.images.map(image => {
        if (image.startsWith('http')) return image;
        return `${import.meta.env.VITE_API_URL}/files/products/${image}`;
    });

    return { ...data, images };
};