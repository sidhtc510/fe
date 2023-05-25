import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productListReducer";

export const rootReducer = combineReducers({
  productList: productListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
