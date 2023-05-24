import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { coffeeReducer } from "./reducers/coffeeReducer";

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
