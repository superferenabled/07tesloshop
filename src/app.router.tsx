import {createBrowserRouter, Navigate} from "react-router";
import {ShopLayout} from "./shop/layouts/ShopLayout.tsx";
import {HomePage} from "./shop/pages/home/HomePage.tsx";
import {ProductPage} from "./shop/pages/product/ProductPage.tsx";
import {GenderPage} from "./shop/pages/gender/GenderPage.tsx";
import {LoginPage} from "./auth/pages/login/LoginPage.tsx";
import {RegisterPage} from "./auth/pages/register/RegisterPage.tsx";
import {DashboardPage} from "./admin/pages/dashboard/DashboardPage.tsx";
import {AdminProductsPage} from "./admin/pages/products/AdminProductsPage.tsx";
import {AdminProductPage} from "./admin/pages/product/AdminProductPage.tsx";
import {lazy} from 'react';

const AuthLayout = lazy(() => import("./auth/layouts/AuthLayout.tsx"));
const AdminLayout = lazy(() => import("./admin/layouts/AdminLayout.tsx"));

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <ShopLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage/>
            },
            {
                path: 'gender/:gender',
                element: <GenderPage/>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="auth/login" />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'products',
                element: <AdminProductsPage />
            },
            {
                path: 'product/:id',
                element: <AdminProductPage />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
]);