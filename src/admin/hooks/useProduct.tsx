import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.action";
import { createUpdateProductAction } from "../actions/create-update-product.action";


export const useProduct = (id: string) => {

    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ['admin-product', {id}],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5,
        enabled: !!id,
    });

    const mutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: (product) => {
            console.log('Product saved successfully:', product);
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['admin-product', {id}] });
            queryClient.setQueryData(['admin-product', {id: product.id}], product);
        },
    });

    //TODO: mutation
    return {...query, mutation};
}
