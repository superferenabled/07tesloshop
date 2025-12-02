import {Outlet} from "react-router";
import {CustomHeader} from "@/shop/components/CustomHeader.tsx";
import {CustomFooter} from "@/shop/components/CustomFooter.tsx";

export const ShopLayout = () => {
    return (
        <div className="min-h-screen bg-background">
            <CustomHeader />
            <h1>TesloShop Layout</h1>
            <Outlet />
            <CustomFooter />
        </div>
    );
};