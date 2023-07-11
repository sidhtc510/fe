import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     list: [],
// };
const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
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
    initialState: { list: [] },
    reducers: {
        priceAction(state, { payload }) {
            const { min, max } = payload;
            state.list.forEach((item) => {
                const currentPrice = item.discont_price ?? item.price;
                item.show.price = currentPrice >= min && currentPrice <= max;
            });
            // myConsole(state)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload.map((item) => ({
                    ...item,
                    show: { search: true, price: true, rate: true },
                }));
                // myConsole(state)
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { priceAction } = productsSlice.actions;
export default productsSlice.reducer;
