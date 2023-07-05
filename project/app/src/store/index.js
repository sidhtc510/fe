import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slice/productSlice'

export const store = configureStore({
    reducer:{
        products: productReducer
    }
})