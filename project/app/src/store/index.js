import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slice/productSlice'
import categoriesReducer from './slice/categoriesSlice'
import cartReducer from './slice/cartSlice'
import discountSlice from './slice/discountSlice'

export const store = configureStore({
    reducer:{
        products: productReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        discount:discountSlice
    }
})
// const currentState = store.getState();

// console.log('Current State:', currentState);