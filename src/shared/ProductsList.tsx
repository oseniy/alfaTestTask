import ProductCard from "@/widgets/productCard/components/ProductCard";
import { useGetProductsQuery } from "@/model/productsApi";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useMemo, useState } from "react";

type FilterType = 'all' | 'liked';

export default function ProductsList() {
    const allProducts = useAppSelector((state) => state.products.list);
    const likedProductIds = useAppSelector((state) => state.products.likedProductIds);
    const dispatch = useAppDispatch();

    const [filter, setFilter] = useState<FilterType>('all');

    const filteredProducts = useMemo(() => {
        if (filter === 'liked') {
            return allProducts.filter((product) => likedProductIds.includes(product.id));
        }
        return allProducts;
    }, [allProducts, likedProductIds, filter]);

    return (
        <div className="w-full px-8 py-4 grid gap-6
            max-xs:[grid-template-columns:repeat(auto-fill,minmax(100px,1fr))]
            max-s:[grid-template-columns:repeat(auto-fill,minmax(140px,1fr))]
            max-m:[grid-template-columns:repeat(auto-fill,minmax(180px,1fr))]
            max-l:[grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]">
            {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p}/>
            ))}
        </div>
    )
}