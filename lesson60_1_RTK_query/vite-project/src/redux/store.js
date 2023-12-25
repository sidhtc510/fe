import { configureStore } from '@reduxjs/toolkit';
import { sliceApi } from './apiSlice';
import { cartReducer } from './cartSlice';

export const store = configureStore({
    reducer: {
        [sliceApi.reducerPath]: sliceApi.reducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sliceApi.middleware)
}
)