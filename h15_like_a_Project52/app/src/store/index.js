import { createStore, combineReducers, applyMiddleware } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
      products: productsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
