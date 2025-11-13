import { ButtonGroup } from "@/shared/shadcn/ui/button-group";
import { Separator } from "@/shared/shadcn/ui/separator";
import LikedOnlyFilterSwitch from "./features/LikedOnlyFilterSwitch";
import CreateProductBtn from "./features/CreateProductBtn";


export default function Header() {
    return (
        <div className="sticky top-0 w-full pt-4 px-8 bg-white">
            <ButtonGroup className="pb-4">
                <ButtonGroup >
                    <CreateProductBtn/>
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