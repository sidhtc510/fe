import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import thunk from 'redux-thunk'
import { loaderReducer } from "./reducers/loaderReducer";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
  categories: categoryReducer,
  products:productsReducer,
  loader: loaderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));