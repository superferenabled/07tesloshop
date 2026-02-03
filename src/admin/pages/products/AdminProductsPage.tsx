import { AdminTitle } from "@/admin/components/AdminTitle.tsx";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router";
import { CustomPagination } from "@/components/custom/CustomPagination.tsx";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useProducts } from "@/shop/hooks/useProducts";
import { currencyFormatter } from "@/lib/currency-formatter";

export const AdminProductsPage = () => {
    const { data } = useProducts();
    return (
        <>


            <div className="flex justify-between items-center">
                <AdminTitle title="Productos" subtitle="Aqui puedes venir a administrar tus productos." />

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
                    {data?.products.map(product => (
                        <TableRow>
                            <TableCell>
                                <img src={product.images[0]}
                                    alt={product.title}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                            </TableCell>
                            <TableCell>
                                <Link to={`/admin/products/${product.id}`} className="hover:text-blue-500 underline">
                                    {product.title}
                                </Link>
                            </TableCell>
                            <TableCell>{currencyFormatter(product.price)}</TableCell>
                            <TableCell>{product.gender}</TableCell>
                            <TableCell>{product.stock} stock</TableCell>
                            <TableCell>{product.sizes.join(', ')}</TableCell>
                            <TableCell className="text-right">
                                <Link to={`/admin/products/${product.id}`}>
                                    <PencilIcon className="w-4 h-4 text-blue-500 hover:text-blue-700" />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <CustomPagination totalPages={data?.pages || 0} />
        </>
    )
        ;
};
