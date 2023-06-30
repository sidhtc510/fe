import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

export const fetchSeanses = createAsyncThunk(
    "seanses/fetchSeanses",
    async () => {
        const resp = await fetch(
            "http://127.0.0.1:5500/server/seanses_data/data.json"
        );
        const data = await resp.json();

        return data;
    }
);

export const seansesSlice = createSlice({
    name: "seanses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSeanses.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSeanses.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload.data;
                
            })
            .addCase(fetchSeanses.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const {} = seansesSlice.actions;

export default seansesSlice.reducer;
