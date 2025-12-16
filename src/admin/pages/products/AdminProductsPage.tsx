import {AdminTitle} from "@/admin/components/AdminTitle.tsx";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Link} from "react-router";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {PlusIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export const AdminProductsPage = () => {
    return (
        <>


            <div className="flex justify-between items-center">
                <AdminTitle title="Productos" subtitle="Aqui puedes venir a administrar tus productos."/>

                <Link to="/admin/products/new">
                    <Button>
                        <PlusIcon />
                        Nuevo producto
                    </Button>
                </Link>
            </div>

            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Imagen</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Inventario</TableHead>
                        <TableHead>Tallas</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>
                            <img src="https://placehold.co/200x200"
                                 alt="product"
                                 className="w-20 h-20 object-cover rounded-md"
                            />
                        </TableCell>
                        <TableCell>Producto 1</TableCell>
                        <TableCell>$250.00</TableCell>
                        <TableCell>Categofia 1</TableCell>
                        <TableCell>100 stock</TableCell>
                        <TableCell>XS, S, L</TableCell>
                        <TableCell className="text-right">
                            <Link to="/admin/products/tshirt-teslo">
                                Editar
                            </Link>

                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <CustomPagination totalPages={10} />
        </>
    )
        ;
};
