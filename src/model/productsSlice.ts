import type { productsT } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: productsT = {
    list: []
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToFavorite: (state, action: PayloadAction<number>) => {
            state
        }
    }
})

export const { addToFavorite } = productsSlice.actions

export default productsSlice.reducer