import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

export const fetchServices = createAsyncThunk(
    "services/fetchServices",
    async () => {
        const resp = await fetch(
            "http://127.0.0.1:5500/server/services_data/data.json"
        );
        const data = await resp.json();

        return data;
    }
);

export const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchServices.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload.data;
                
            })
            .addCase(fetchServices.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const {} = servicesSlice.actions;

export default servicesSlice.reducer;
