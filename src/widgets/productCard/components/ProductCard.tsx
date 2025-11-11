import { Button } from "@/shared/shadcn/ui/button";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/shared/shadcn/ui/item";
import { Toggle } from "@/shared/shadcn/ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/shadcn/ui/tooltip";
import type { productT } from "@/types";
import { Heart, Trash2 } from "lucide-react"
import Like from "../features/Like";

interface ProductCardProps {
    product: productT
}

export default function ProductCard({product} : ProductCardProps) {
    return (
        <Item variant="outline">
            <ItemHeader>
                <img 
                src={product.image} 
                alt="Logo"
                className="aspect-square w-full rounded-sm object-contain"/>
            </ItemHeader>
            <ItemContent>
              <ItemTitle className="overflow-hidden text-ellipsis line-clamp-2">{product.title}</ItemTitle>
              <ItemDescription className="text-[green]">{product.price} $</ItemDescription>
              <ItemContent className=" pt-2 flex-row justify-between">
                <Like id={product.id}/>
                <Tooltip>
                    <TooltipTrigger>
                        <Button variant="outline" size="icon-lg"> <Trash2/> </Button>
                    </TooltipTrigger>
                    <TooltipContent>Удалить товар</TooltipContent>
                </Tooltip>
              </ItemContent>
            </ItemContent>
        </Item>
    )
}