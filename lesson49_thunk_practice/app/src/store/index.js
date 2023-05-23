import { createStore, combineReducers, applyMiddleware } from "redux";
import { commentsReducer } from "./reducers/commentsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  comments: commentsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
