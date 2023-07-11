import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slice/productSlice'
import categoriesReducer from './slice/categoriesSlice'
import categoryProductsReducer from './slice/categoryProductsSlice'
import cartReducer from './slice/cartSlice'

export const store = configureStore({
    reducer:{
        products: productReducer,
        categories: categoriesReducer,
        categoryProducts: categoryProductsReducer,
        cart: cartReducer
    }
})
// const currentState = store.getState();

// console.log('Current State:', currentState);