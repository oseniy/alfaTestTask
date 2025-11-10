import { Plus } from "lucide-react"

import { Button } from "@/shared/shadcn/ui/button";
import { ButtonGroup } from "@/shared/shadcn/ui/button-group";
import { Separator } from "@/shared/shadcn/ui/separator";
import { Switch } from "@/shared/shadcn/ui/switch";
import { Label } from "@/shared/shadcn/ui/label";


export default function Header() {
    return (
        <div className="sticky top-0 w-full pt-4 px-8 bg-white">
            <ButtonGroup className="pb-4">
                <ButtonGroup >
                    <Button variant="default" size="sm">
                        <Plus/> Добавить
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Separator orientation="vertical"/>
                </ButtonGroup>
                <ButtonGroup className="">
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Только избранные</Label>
                    </div>
                </ButtonGroup>
            </ButtonGroup>
            <Separator/>
        </div>
    )
}