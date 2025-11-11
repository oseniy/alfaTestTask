import { useGetProductsQuery } from "@/model/productsApi";
import { useAppDispatch } from "./reduxHooks";
import { useEffect } from "react";
import { setProducts } from "@/model/productsSlice";

export default function useSetProducts() {
    const { data, isSuccess } = useGetProductsQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setProducts(data.list));
        }
    }, [isSuccess, data, dispatch]);

    return null;
}