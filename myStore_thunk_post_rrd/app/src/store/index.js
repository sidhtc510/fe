import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";

const rootReducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
