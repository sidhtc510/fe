import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

const initialState = {
    category: {},
    list: [],
    status: "",
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (id) => {
        const url = id
            ? `http://localhost:3333/products/${id}`
            : "http://localhost:3333/products/all";
        const resp = await fetch(url);
        const data = await resp.json();
// console.log("slice", data);
        return data;
    }
);

export const fetchCategoryProducts = createAsyncThunk(
    "products/fetchCategoryProducts",
    async (category_id) => {
        const url = `http://localhost:3333/categories/${category_id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        priceAction(state, { payload }) {
            const { min, max } = payload;
            state.list.forEach((item) => {
                const currentPrice = item.discont_price ?? item.price;
                item.show.price = currentPrice >= min && currentPrice <= max;
            });
            // myConsole(state)
        },

        rateAction(state, { payload }) {
            state.list.forEach((item) => {
                item.show.rate = !payload || item.discont_price !== null;
            });
        },
        sortAction(state, { payload }) {
            ({
                priceAsc: () => state.list.sort((a, b) => a.price - b.price),
                priceDesc: () => state.list.sort((a, b) => b.price - a.price),
                titleAtoZ: () =>
                    state.list.sort((a, b) => a.title.localeCompare(b.title)),
                titleZtoA: () =>
                    state.list.sort((a, b) => b.title.localeCompare(a.title)),
            })[payload]();
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
                myConsole(state);
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            })
            .addCase(fetchCategoryProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategoryProducts.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.category = payload.category;
                state.list = payload.data.map((item) => ({
                    ...item,
                    show: { search: true, price: true, rate: true },
                }));
            })
            .addCase(fetchCategoryProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { priceAction, rateAction, sortAction } = productsSlice.actions;
export default productsSlice.reducer;
