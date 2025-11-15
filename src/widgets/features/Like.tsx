import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { selectLikedProductIds } from "@/model/productsSelectors";
import { toggleLike } from "@/model/productsSlice";
import { Toggle } from "@/shared/shadcn/ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";
import type { ProductId } from "@/types";
import { Heart } from "lucide-react";


export default function Like({ id }: { id: ProductId}) {
  const dispatch = useAppDispatch();
  const likedProductIds = useAppSelector(selectLikedProductIds);
  const isLiked = likedProductIds.includes(id);
  const isMobile = useIsMobile();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div>
                    <Toggle 
                    pressed={isLiked}
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(toggleLike(id))
                    }}
                    size="icon-lg"
                    variant="outline"
                    className=" cursor-pointer data-[state=on]:bg-transparent 
                    data-[state=on]:*:[svg]:fill-red-500 
                    data-[state=on]:*:[svg]:stroke-red-500">
                        <Heart/>
                    </Toggle>
                </div>
            </TooltipTrigger>
            {!isMobile && <TooltipContent>Добавить в избранные</TooltipContent>}
        </Tooltip>
    )
}