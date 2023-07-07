import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [{
        id:1
    }],
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (id) => {
        const url = id
            ? `http://localhost:3333/products/${id}`
            : "http://localhost:3333/products/all";
        const resp = await fetch(url);
        const data = await resp.json();

        return data;
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export default productsSlice.reducer;
