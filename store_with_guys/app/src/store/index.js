import { combineReducers, createStore } from "redux";
import { goodsReducer } from "./reducers/goodsReducer";
import { priceRangeReducer } from "./reducers/priceRangeReducer";
import { cartReducer } from "./reducers/cartReducer";
import { nightModeReducer } from "./reducers/nightModeReducer";

const rootReducer = combineReducers({
  goods: goodsReducer,
  priceRange: priceRangeReducer,
  cart: cartReducer,
  nightMode: nightModeReducer
});

export const store = createStore(rootReducer);
