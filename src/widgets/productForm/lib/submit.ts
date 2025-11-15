import type { productT, productId } from "@/types";
import { addProduct, updateProduct } from "@/model/productsSlice";

export const buildSubmitHandler =
    (mode: "create" | "edit", existingProduct: productT | undefined, dispatch: any) =>
        (data: any, lastId: productId) => {

            const imageUrl =
                typeof data.image === "string"
                ? data.image
                : data.image?.[0]
                ? URL.createObjectURL(data.image[0])
                : existingProduct?.image ?? "";

            const updatedProduct: productT = {
                id:
                mode === "edit" && existingProduct
                    ? existingProduct.id
                    : String(Number(lastId) + 1) as productId,
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