import { useAppSelector } from "@/hooks/reduxHooks";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/shared/shadcn/ui/dialog";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Like from "./features/Like";
import Delete from "./features/Delete";
import EditBtn from "./features/EditBtn";

export default function ProductModal() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = useAppSelector((s) => s.products.list.find((p) => p.id === id));

    return (
        <>
            <Dialog open defaultOpen onOpenChange={() => navigate('/products')}>
                <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
                            <img 
                            src={product?.image} 
                            alt="Logo"
                            className="flex-1 aspect-square max-w-full rounded-sm object-contain 
                            max-w-[300px] max-h-[300px] w-full"/>
                            <DialogTitle>{product?.title}</DialogTitle>
                            <DialogTitle className="text-[green]">{product?.price} $</DialogTitle >
                            <DialogDescription className="flex flex-1 items-center">
                                {product?.description}
                            </DialogDescription>
                            <DialogFooter className="flex-row">
                                <EditBtn id={product?.id}/>
                                <Like id={product?.id}/>
                                <Delete id={product?.id}/>
                            </DialogFooter>
                </DialogContent>
            </Dialog>
            <Outlet />
        </>
    )
}