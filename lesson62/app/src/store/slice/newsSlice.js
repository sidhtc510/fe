import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async () => {
        const resp = await fetch(
            "http://127.0.0.1:5500/server/news_data/data.json"
        );
        const data = await resp.json();

        return data;
    }
);

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchNews.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload.data;
                
            })
            .addCase(fetchNews.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
