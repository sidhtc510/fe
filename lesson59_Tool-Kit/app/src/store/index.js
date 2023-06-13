import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slice/todoSlice';
import usersReducer from './slice/usersSlice';

export const store = configureStore({
    reducer : {
        todos: todoReducer,
        users: usersReducer,
    }
});