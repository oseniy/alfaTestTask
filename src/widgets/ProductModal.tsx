import { useAppSelector } from "@/hooks/reduxHooks";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/shared/shadcn/ui/dialog";
import { useNavigate, useParams } from "react-router-dom";
import Like from "./features/Like";
import Delete from "./features/Delete";

export default function ProductModal() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = useAppSelector((s) => s.products.list.find((p) => p.id === id))

    return (
        <Dialog open defaultOpen onOpenChange={() => navigate('/products')}>
            <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
                    <div className="flex">
                        <img 
                        src={product?.image} 
                        alt="Logo"
                        className=" flex-1 aspect-square w-full rounded-sm object-contain"/>
                        <DialogDescription className="flex flex-1 p-3 items-center">
                            {product?.description}
                        </DialogDescription>
                    </div>
                    <DialogTitle>{product?.title}</DialogTitle>
                    <DialogTitle className="text-[green]">{product?.price} $</DialogTitle>
                    <DialogFooter>
                        <Like id={product?.id}/>
                        <Delete id={product?.id}/>
                    </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}