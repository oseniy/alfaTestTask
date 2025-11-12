import { useIsMobile } from "@/hooks/useIsMobile";
import { Button } from "@/shared/shadcn/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CreateProductBtn() {
    const isMobile = useIsMobile();
    const navigate = useNavigate();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div>
                    <Button onClick={() => {navigate('/products/create-product')}} variant="default" size="sm">
                        <Plus/> Создать
                    </Button>
                </div>
            </TooltipTrigger>
            {!isMobile && <TooltipContent>Создать новый товар</TooltipContent>}
        </Tooltip>
    )
}