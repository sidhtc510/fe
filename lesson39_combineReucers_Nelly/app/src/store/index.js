import {combineReducers, createStore} from 'redux'
import { productsReducer } from './reducers/productsReducer';
import { wordsReducer } from './reducers/wordsReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    words: wordsReducer
});

export const store = createStore(rootReducer)