import { Plus } from "lucide-react"

import { Button } from "@/shared/shadcn/ui/button";
import { ButtonGroup } from "@/shared/shadcn/ui/button-group";
import { Separator } from "@/shared/shadcn/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";
import { useIsMobile } from "@/hooks/useIsMobile";
import LikedOnlyFilterSwitch from "./features/LikedOnlyFilterSwitch";


export default function Header() {
    const isMobile = useIsMobile()
    return (
        <div className="sticky top-0 w-full pt-4 px-8 bg-white">
            <ButtonGroup className="pb-4">
                <ButtonGroup >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div>
                                <Button variant="default" size="sm">
                                    <Plus/> Создать
                                </Button>
                            </div>
                        </TooltipTrigger>
                        {!isMobile && <TooltipContent>Создать новый товар</TooltipContent>}
                    </Tooltip>
                </ButtonGroup>
                <ButtonGroup>
                    <Separator orientation="vertical"/>
                </ButtonGroup>
                <ButtonGroup className="">
                    <LikedOnlyFilterSwitch/>
                </ButtonGroup>
            </ButtonGroup>
            <Separator/>
        </div>
    )
}