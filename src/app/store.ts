import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../model/productsSlice'
import { productsApi } from '@/model/productsApi'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (gdm) => gdm().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch