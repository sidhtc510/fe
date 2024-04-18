import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sliceApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products/' }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => `categories`
        }),
        getProductsByCategory: builder.query({
            query: (category) => `category/${category}`
        }),
        getSingleProduct: builder.query({
            query: (id) => `${id}`
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: '/',
                method: 'POST',
                body: product
            })
        })
    })
})

export const { useGetAllCategoriesQuery, useGetProductsByCategoryQuery, useGetSingleProductQuery, useAddProductMutation } = sliceApi