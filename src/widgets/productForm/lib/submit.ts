import type { ProductT, ProductId } from "@/types";
import { addProduct, updateProduct } from "@/model/productsSlice";

export const buildSubmitHandler =
    (mode: "create" | "edit", existingProduct: ProductT | undefined, dispatch: any) =>
        (data: any, lastId: ProductId) => {

            const imageUrl =
                typeof data.image === "string"
                ? data.image
                : data.image?.[0]
                ? URL.createObjectURL(data.image[0])
                : existingProduct?.image ?? "";

            const updatedProduct: ProductT = {
                id:
                mode === "edit" && existingProduct
                    ? existingProduct.id
                    : String(Number(lastId) + 1) as ProductId,
                title: data.title,
                price: Number(data.price),
                description: data.description,
                image: imageUrl,
            };

            if (mode === "edit") {
                dispatch(updateProduct(updatedProduct));
            } else {
                dispatch(addProduct(updatedProduct));
            }

            return updatedProduct;
        };