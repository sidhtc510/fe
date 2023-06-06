import { createStore, combineReducers, applyMiddleware } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
