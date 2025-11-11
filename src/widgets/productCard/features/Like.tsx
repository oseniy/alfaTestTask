import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { toggleLike } from "@/model/productsSlice";
import { Toggle } from "@/shared/shadcn/ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";
import { Heart } from "lucide-react";


export default function Like({ id }: { id: string }) {
  const dispatch = useAppDispatch()
  const likedProductIds = useAppSelector((s) => s.products.likedProductIds)
  const isLiked = likedProductIds.includes(id)
  const isMobile = useIsMobile()

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div>

                    <Toggle 
                    pressed={isLiked}
                    onPressedChange={() => dispatch(toggleLike(id))}
                    size="icon-lg"
                    variant="outline"
                    className="data-[state=on]:bg-transparent 
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