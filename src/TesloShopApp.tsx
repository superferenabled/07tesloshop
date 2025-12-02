import {RouterProvider} from "react-router";
import {appRouter} from "./app.router.tsx";


export const TesloShopApp = () => {
    return (
        <RouterProvider router={appRouter}>
        </RouterProvider>
    );
}