import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "./slices/notes";
import { apiSlice } from "./slices/api";

export const store = configureStore({
    reducer: {
        notes: notesReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware),
});