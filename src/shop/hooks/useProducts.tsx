import {useQuery} from "@tanstack/react-query";
import {getProductsAction} from "@/shop/actions/get-products.action.ts";

export const useProducts = () => {
    //TODO: se viene la logica
    return useQuery({
        queryKey: ['products'],
        queryFn: getProductsAction,
        staleTime: 1000 * 60 * 5,
    });
};
