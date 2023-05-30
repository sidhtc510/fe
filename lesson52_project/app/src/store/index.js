import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import thunk from 'redux-thunk'
import { productsReducer } from "./reducers/productsReducer";
import { bascketReducer } from "./reducers/bascketReducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  bascket: bascketReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
