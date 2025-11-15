import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { selectLikedOnlyFilter } from "@/model/productsSelectors";
import { toggleLikedOnlyFilter } from "@/model/productsSlice";
import { Label } from "@/shared/shadcn/ui/label";
import { Switch } from "@/shared/shadcn/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";

export default function LikedOnlyFilterSwitch() {
    const isMobile = useIsMobile();
    const dispatch = useAppDispatch();
    const switched = useAppSelector(selectLikedOnlyFilter);

    return (
        <div className="flex items-center space-x-2">
            <Tooltip>
                <TooltipTrigger asChild>
                    <div>
                        <Switch
                        id="switch-1"
                        defaultChecked={switched}
                        onCheckedChange={() => dispatch(toggleLikedOnlyFilter())} />
                    </div>
                </TooltipTrigger>
                {!isMobile && <TooltipContent>Показать только избранные</TooltipContent>}
            </Tooltip>
            <Label htmlFor="switch-1">Только избранные</Label>
        </div>

    )
}