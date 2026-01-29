import { RouterProvider } from "react-router";
import { appRouter } from "./app.router.tsx";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from 'sonner';
import { CustomFullScreenLoading } from "./components/custom/CustomFullScreenLoading.tsx";
import type { PropsWithChildren } from "react";
import { useAuthStore } from "./auth/store/auth.store.ts";

const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {

    const {checkAuthStatus} = useAuthStore();

    const { data, isLoading } = useQuery({
        queryKey: ['auth'],
        queryFn: checkAuthStatus,
        retry: false,
        refetchInterval: 1000 * 60 * 1.5,
        refetchOnWindowFocus: true,
    });
    console.log({ data, isLoading });

    if (isLoading) return <CustomFullScreenLoading />;

    return children;
}

export const TesloShopApp = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <CheckAuthProvider>
                <RouterProvider router={appRouter} />
            </CheckAuthProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}