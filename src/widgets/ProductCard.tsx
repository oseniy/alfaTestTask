import { useNavigate } from "react-router";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/shared/shadcn/ui/item";
import type { ProductT } from "@/types";
import Like from "./features/Like";
import Delete from "./features/Delete";

interface ProductCardProps {
    product: ProductT
}

export default function ProductCard({product} : ProductCardProps) {
    const navigate = useNavigate();

    return (
            <Item variant="outline" className="cursor-pointer" onClick={() => navigate(`/products/${product.id}`)}>
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
                    <Delete id={product.id}/>
                </ItemContent>
                </ItemContent>
            </Item>
    )
}