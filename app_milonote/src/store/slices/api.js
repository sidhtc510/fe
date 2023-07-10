import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    endpoints: (builder) => {
        return {
            getCards: builder.query({
                query: () => "/cards"
            }),
            createCard: builder.mutation({
                query: (json) => {
                    return {
                        url: "/cards",
                        method: "POST",
                        body: json,
                    }
                }
            })
        }
    }
});

export const { useGetCardsQuery, useCreateCardMutation } = apiSlice;