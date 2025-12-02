import {Outlet} from "react-router";

export const AdminLayout = () => {
    return (
        <div>
            <h1>Admin Product</h1>
            <Outlet />
        </div>
    );
};

export default AdminLayout;