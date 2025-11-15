import { useAppSelector } from "@/hooks/reduxHooks";
import { selectAllProducts, selectLikedOnlyFilter, selectLikedProductIds } from "@/model/productsSelectors";

export function useGetFilteredProducts() {
    const allProducts = useAppSelector(selectAllProducts);
    const likedProductIds = useAppSelector(selectLikedProductIds);
    const likedOnlyFilter = useAppSelector(selectLikedOnlyFilter);

    if (likedOnlyFilter) {
        return allProducts.filter((product) => likedProductIds.includes(product.id));
    } else {
        return allProducts;
    }
}