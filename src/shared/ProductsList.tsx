import ProductCard from "@/widgets/productCard/components/ProductCard";
import { useGetProductsQuery } from "@/model/productsApi";


export default function ProductsList() {
    const { data, isLoading, error } = useGetProductsQuery()
    return (
        <div className="w-full px-8 py-4 grid gap-6
            max-xs:[grid-template-columns:repeat(auto-fill,minmax(100px,1fr))]
            max-s:[grid-template-columns:repeat(auto-fill,minmax(140px,1fr))]
            max-m:[grid-template-columns:repeat(auto-fill,minmax(180px,1fr))]
            max-l:[grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]">
            {data?.list.map((p) => (
                <ProductCard key={p.id} product={p}/>
            ))}
        </div>
    )
}