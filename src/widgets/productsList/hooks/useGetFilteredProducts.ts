import { useAppSelector } from "@/hooks/reduxHooks";

export function useGetFilteredProducts() {
    const allProducts = useAppSelector((state) => state.products.list);
    const likedProductIds = useAppSelector((state) => state.products.likedProductIds);
    const likedOnlyFilter = useAppSelector((state) => state.products.likedOnlyFilter);

    if (likedOnlyFilter) {
        return allProducts.filter((product) => likedProductIds.includes(product.id));
    } else {
        return allProducts;
    }
}