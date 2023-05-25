import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import thunk from 'redux-thunk'
import { productsReducer } from "./reducers/productsReducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
