import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import { productsReducer } from "./reducers/productsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
