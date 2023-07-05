import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slice/productSlice'
import categoriesReducer from './slice/categoriesSlice'
import categoryProductsReducer from './slice/categoryProductsSlice'

export const store = configureStore({
    reducer:{
        products: productReducer,
        categories: categoriesReducer,
        categoryProducts: categoryProductsReducer
    }
})