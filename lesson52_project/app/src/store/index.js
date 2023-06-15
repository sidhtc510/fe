import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/categorySlice";
import productsReducer from "./slice/productsSlice";
import bascketReducer from "./slice/bascketSlice";

export const store = configureStore({
    reducer: {
        category: categoriesReducer,
        products: productsReducer,
        bascket: bascketReducer,
    },
});
