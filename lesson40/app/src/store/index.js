import {combineReducers, createStore} from 'redux';
import { userReducer } from './reducer/userReducer';
import { productReducer } from './reducer/productReducer';

const rootReducer = combineReducers({
    users: userReducer,
    products: productReducer
})

export const store = createStore(rootReducer);