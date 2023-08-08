import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    list: [],
    status: "loading"
};

export const fetchProducts = createAsyncThunk(
"products/fetchProducts", 
async () => {
    const resp = await fetch("http://127.0.0.1:5500/products.json");
    const data = await resp.json();
    return data;
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const {  } = productsSlice.actions;

export default productsSlice.reducer;