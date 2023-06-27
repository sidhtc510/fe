import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const resp = await fetch("https://dummyjson.com/products");
        const data = await resp.json();
        return data;
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState: { list: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload.products.map((el) => ({
                    ...el,
                }));
                // console.log(state);
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
