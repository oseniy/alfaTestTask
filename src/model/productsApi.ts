import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { productId, productsT } from '../types'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://oseniy.github.io/myFakeStoreApi/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<productsT, void>({
            query: () => 'products.json',
            transformResponse: (response: any) => {
                const mapped = (response.products ?? []).map((p: any) => ({
                    id: String(p.id) as productId,
                    title: p.title,
                    price: Number(p.price),
                    image: p.thumbnail ?? (p.images?.[0] ?? ''),
                    description: p.description ?? '',
                }))
                return { list: mapped };
            },
        })
    }),
})

export const { useGetProductsQuery } = productsApi;