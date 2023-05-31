import { combineReducers, createStore } from "redux";
import { goodsReducer } from "./reducers/goodsReducer";
import { priceRangeReducer } from "./reducers/priceRangeReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
  goods: goodsReducer,
  priceRange: priceRangeReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer);
