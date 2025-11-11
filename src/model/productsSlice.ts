import type { productsT, productT } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface productsState extends productsT {
    likedProductIds: string[],
    LikedOnlyFilter: boolean
}

const initialState: productsState = {
    list: [],
    likedProductIds: [],
    LikedOnlyFilter: false
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<productT[]>) => {
            state.list = action.payload;
        },
        addProduct: (state, action: PayloadAction<productT>) => {
            state.list.push(action.payload)
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter((p) => p.id !== action.payload)
            state.likedProductIds = state.likedProductIds.filter((id) => id !== action.payload)
        },
        toggleLike: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            if (state.likedProductIds.includes(id)) {
                state.likedProductIds = state.likedProductIds.filter((productId) => productId !== id);
            } else {
                state.likedProductIds.push(id);
            }
        },
        toggleLikedOnlyFilter: (state) => {
            state.LikedOnlyFilter = !state.LikedOnlyFilter;
        },
        updateProduct: (state, action: PayloadAction<productT>) => {
            const index = state.list.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
    }
})

export const { setProducts, addProduct, deleteProduct, toggleLike, updateProduct, toggleLikedOnlyFilter } = productsSlice.actions

export default productsSlice.reducer