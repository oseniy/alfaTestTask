import ProductCard from "@/widgets/productCard/ProductCard";
import { useGetProductsQuery } from "@/model/productsApi";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useMemo, useState } from "react";
import { useGetFilteredProducts } from "./hooks/useGetFilteredProducts";

export default function ProductsList() {
    const filteredProducts = useGetFilteredProducts();

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