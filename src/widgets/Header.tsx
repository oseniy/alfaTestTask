import { Plus } from "lucide-react"

import { Button } from "@/shared/shadcn/ui/button";
import { ButtonGroup } from "@/shared/shadcn/ui/button-group";
import { Separator } from "@/shared/shadcn/ui/separator";
import { Switch } from "@/shared/shadcn/ui/switch";
import { Label } from "@/shared/shadcn/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";
import { useIsMobile } from "@/hooks/useIsMobile";


export default function Header() {
    const isMobile = useIsMobile()
    return (
        <div className="sticky top-0 w-full pt-4 px-8 bg-white">
            <ButtonGroup className="pb-4">
                <ButtonGroup >
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="default" size="sm">
                                <Plus/> Создать
                            </Button>
                        </TooltipTrigger>
                        {!isMobile && <TooltipContent>Создать новый товар</TooltipContent>}
                    </Tooltip>
                </ButtonGroup>
                <ButtonGroup>
                    <Separator orientation="vertical"/>
                </ButtonGroup>
                <ButtonGroup className="">
                    <div className="flex items-center space-x-2">
                        <Tooltip>
                            <TooltipTrigger>
                                <Switch id="favorite-only" />
                            </TooltipTrigger>
                            {!isMobile && <TooltipContent>Показать только избранные</TooltipContent>}
                        </Tooltip>
                        <Label htmlFor="airplane-mode">Только избранные</Label>
                    </div>
                </ButtonGroup>
            </ButtonGroup>
            <Separator/>
        </div>
    )
}