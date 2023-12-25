import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, { payload }) => {
            state.products = [...state.products, payload]
        }
    }
})
export const { addProductToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;