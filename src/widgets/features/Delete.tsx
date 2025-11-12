import { useAppDispatch } from "@/hooks/reduxHooks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { deleteProduct } from "@/model/productsSlice";
import { Button } from "@/shared/shadcn/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";
import type { productId } from "@/types";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Delete({ id }: { id: productId}) {
    const isMobile = useIsMobile();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div>

                    <Button 
                    onClick={(e) => {
                        navigate(`/products`)
                        e.stopPropagation()
                        dispatch(deleteProduct(id))
                    }}
                    variant="outline" size="icon-lg"> <Trash2/> </Button>
                </div>
            </TooltipTrigger>
            {!isMobile && <TooltipContent>Удалить товар</TooltipContent>}
        </Tooltip>
    )
}