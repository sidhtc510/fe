import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../store/slices/productsSlice.js";
import cartReducer from "./slices/cartSlice.js";
export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
});
