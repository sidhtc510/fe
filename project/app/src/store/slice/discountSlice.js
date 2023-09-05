import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postDiscount = createAsyncThunk("discount/postDiscount", async (postData) => {
  
    try {
        const response = await axios.post("http://localhost:3333/sale/send", postData);
        return response.data;
    } catch (error) {
        throw error;
    }
});





export const discountSlice = createSlice({
    name: "discount",
    initialState: { status: "loading", data: { status: "loading" } },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(postDiscount.pending, (state) => {
                state.status = "loading";
            })
            .addCase(postDiscount.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(postDiscount.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const {} = discountSlice.actions;
export default discountSlice.reducer;
