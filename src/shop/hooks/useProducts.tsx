import {useQuery} from "@tanstack/react-query";
import {getProductsAction} from "@/shop/actions/get-products.action.ts";
import {useParams, useSearchParams} from "react-router";

export const useProducts = () => {
    const {gender} = useParams();
    const [searchParams] = useSearchParams();

    const limit = searchParams.get("limit") || 9;
    const page = searchParams.get("page") || 1;
    const sizes = searchParams.get("sizes") || undefined;
    const price = searchParams.get("price") || 'any';
    const query = searchParams.get("query") || undefined;

    const offset = (Number(page) - 1) * Number(limit);

    let maxPrice = undefined;
    let minPrice = undefined;

    switch (price) {

        case "any":
            break;
        case "0-50":
            maxPrice = 50;
            minPrice = 0;
            break;
        case "50-100":
            maxPrice = 100;
            minPrice = 50;
            break;
        case "100-200":
            maxPrice = 200;
            minPrice = 100;
            break;
        case "200+":
            maxPrice = undefined;
            minPrice = 200;
            break;

    }

    return useQuery({
        queryKey: ['products', {limit, offset, sizes, gender, minPrice, maxPrice, query}],
        queryFn: () => getProductsAction({
            limit: isNaN(+limit) ? 9 : limit,
            offset: isNaN(offset) ? 0 : offset,
            sizes,
            gender,
            minPrice,
            maxPrice,
            query
        }),
        staleTime: 1000 * 60 * 5,
    });
};
