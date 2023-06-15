import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slice/todoSlice';
import usersReducer from './slice/usersSlice';
import productsReducer from './slice/productsSlice';

export const store = configureStore({
    reducer : {
        todos: todoReducer,
        users: usersReducer,
        products: productsReducer
    }
});