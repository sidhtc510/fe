import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "./slice/servicesSlice";
import seansesSlice from "./slice/seansesSlice";
import newsSlice from "./slice/newsSlice";

export const store = configureStore({
    reducer: {
        services: servicesSlice,
        seanses: seansesSlice,
        news: newsSlice,
    },
});
