import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const resp = await fetch("https://fakestoreapi.com/products");
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
                item.show.price = item.price >= min && item.price <= max;
            });
        },
        searchAction(state, { payload }) {
            state.list.forEach((item) => {
                item.show.search = item.title
                    .toLowerCase()
                    .includes(payload.toLowerCase());
            });
        },
        sortAction(state, { payload }) {
            //variant #1 :

            // if (payload === "price") {
            //      state.list.sort((a, b) => a.price - b.price);
            // } else if (payload === "rating") {
            //      state.list.sort((a, b) => a.rating.rate - b.rating.rate);
            // } else if (payload === "title") {
            //      state.list.sort((a, b) =>
            //         a.title.localeCompare(b.title)
            //     );
            // }

            //variant #2 :
            ({
                price: () => state.list.sort((a, b) => a.price - b.price),
                rating: () =>
                    state.list.sort((a, b) => a.rating.rate - b.rating.rate),
                title: () =>
                    state.list.sort((a, b) => a.title.localeCompare(b.title)),
            })[payload]();
        },
        rateAction(state, { payload }) {
            state.list.forEach((item) => {
                item.show.rate = payload ? item.rating.rate >= 4 : true;
            });
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
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { priceAction, searchAction, sortAction, rateAction } =
    productsSlice.actions;

export default productsSlice.reducer;
