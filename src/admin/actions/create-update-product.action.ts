import { tesloApi } from "@/api/teslo.api";
import type { Product } from "@/interfaces/product.interface";
import { sleep } from "@/lib/sleep";

export const createUpdateProductAction = async (productLike: Partial<Product> & { files?: File[] }) => {

    await sleep(1500); // Simulamos un delay para ver el loading en acción
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, user, images = [], files = [], ...rest } = productLike;

    const isCreating = id === 'new';

    rest.stock = Number(rest.stock || 0);
    rest.price = Number(rest.price || 0);

    console.log({ files });
    // prepare images
    let imagesToUpload: string[] = [...images];
    if (files.length > 0) {
        const uploadedFileNames = await uploadFiles(files);
        imagesToUpload = [...imagesToUpload, ...uploadedFileNames];
    }

    const imagesUpdated = imagesToUpload.map(image => {
        if (image.includes('http')) return image.split('/').slice(-1)[0]; // Extraemos el nombre del archivo de la URL  
        return image;
    });

    const { data } = await tesloApi<Product>({
        url: isCreating ? '/products' : `/products/${id}`,
        method: isCreating ? 'POST' : 'PATCH',
        data: { 
            ...rest,
            images: imagesUpdated
        },
    });

    return {
        ...data, images: data.images.map(image => {
            if (image.includes('http')) return image;
            return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
        })
    }

};

export interface FileUploadResponse {
    fileName: string;
    secureUrl: string;
}


const uploadFiles = async (files: File[]) => {

    const uploadPromises = files.map(async file => {

        const formData = new FormData();
        formData.append('file', file);

        const { data } = await tesloApi<FileUploadResponse>({
            url: '/files/product',
            method: 'POST',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return data.fileName;
    });
    
    const uploadedFileNames = await Promise.all(uploadPromises);
    return uploadedFileNames;
};