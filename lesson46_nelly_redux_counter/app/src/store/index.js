import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer);
