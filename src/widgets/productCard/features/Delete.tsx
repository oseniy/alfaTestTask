import { useAppDispatch } from "@/hooks/reduxHooks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { deleteProduct } from "@/model/productsSlice";
import { Button } from "@/shared/shadcn/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";
import { Trash2 } from "lucide-react";

export default function Delete({ id }: { id: string }) {
    const isMobile = useIsMobile();
    const dispatch = useAppDispatch();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div>

                    <Button 
                    onClick={() => dispatch(deleteProduct(id))}
                    variant="outline" size="icon-lg"> <Trash2/> </Button>
                </div>
            </TooltipTrigger>
            {!isMobile && <TooltipContent>Удалить товар</TooltipContent>}
        </Tooltip>
    )
}