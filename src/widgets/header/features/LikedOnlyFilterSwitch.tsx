import { useAppDispatch } from "@/hooks/reduxHooks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { toggleLikedOnlyFilter } from "@/model/productsSlice";
import { Label } from "@/shared/shadcn/ui/label";
import { Switch } from "@/shared/shadcn/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";

export default function LikedOnlyFilterSwitch() {
    const isMobile = useIsMobile();
    const dispatch = useAppDispatch();

    return (
        <div className="flex items-center space-x-2">
            <Tooltip>
                <TooltipTrigger>
                    <Switch 
                    onCheckedChange={() => dispatch(toggleLikedOnlyFilter())} />
                </TooltipTrigger>
                {!isMobile && <TooltipContent>Показать только избранные</TooltipContent>}
            </Tooltip>
            <Label htmlFor="airplane-mode">Только избранные</Label>
        </div>

    )
}