import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice/dataSlice";

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});
