import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { productsT, productT } from '../types'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<productsT, void>({
            query: () => 'products',
            transformResponse: (response: any) => {
                const mapped = (response.products ?? []).map((p: any) => ({
                    id: String(p.id),
                    title: p.title,
                    price: Number(p.price),
                    image: p.thumbnail ?? (p.images?.[0] ?? ''),
                    description: p.description ?? '',
                }))
                return { list: mapped }
            },
        }),
        getProductById: builder.query<productT, string>({
            query: (id) => `products/${id}`,
        }),
    }),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi