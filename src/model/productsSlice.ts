import type { ProductId, ProductsT, ProductT } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface productsState extends ProductsT {
    likedProductIds: ProductId[],
    likedOnlyFilter: boolean
}

const initialState: productsState = {
    list: [],
    likedProductIds: [],
    likedOnlyFilter: false
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductT[]>) => {
            state.list = action.payload;
        },
        addProduct: (state, action: PayloadAction<ProductT>) => {
            state.list.push(action.payload);
        },
        deleteProduct: (state, action: PayloadAction<ProductId>) => {
            state.list = state.list.filter((p) => p.id !== action.payload);
            state.likedProductIds = state.likedProductIds.filter((id) => id !== action.payload);
        },
        toggleLike: (state, action: PayloadAction<ProductId>) => {
            const id = action.payload;
            if (state.likedProductIds.includes(id)) {
                state.likedProductIds = state.likedProductIds.filter((ProductId) => ProductId !== id);
            } else {
                state.likedProductIds.push(id);
            }
        },
        toggleLikedOnlyFilter: (state) => {
            state.likedOnlyFilter = !state.likedOnlyFilter;
        },
        updateProduct: (state, action: PayloadAction<ProductT>) => {
            const index = state.list.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
    }
})

export const { setProducts, addProduct, deleteProduct, 
    toggleLike, updateProduct, toggleLikedOnlyFilter } = productsSlice.actions;

export default productsSlice.reducer;