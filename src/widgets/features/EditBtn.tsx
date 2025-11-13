import { useIsMobile } from "@/hooks/useIsMobile";
import { Button } from "@/shared/shadcn/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";
import type { productId } from "@/types";
import { SquarePen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EditBtn({ id }: { id: productId}) {
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    return (
        <Tooltip>
            <TooltipTrigger                              
            asChild>
                <div>
                    <Button
                    variant="outline" size="icon-lg"
                    onClick={() => navigate(`/products/edit/${id}`)}
                    > <SquarePen/> </Button>
                </div>
            </TooltipTrigger>
            {!isMobile && <TooltipContent>Редактировать товар</TooltipContent>}
        </Tooltip> 
    )

}