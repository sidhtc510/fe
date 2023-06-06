import { combineReducers, createStore } from "redux";
import { goodsReducer } from "./reducers/goodsReducer";
import { priceRangeReducer } from "./reducers/priceRangeReducer";
import { cartReducer } from "./reducers/cartReducer";
import { nightModeReducer } from "./reducers/nightModeReducer";
import { searchProductsReducer } from "./reducers/searchProductsReducer";

const rootReducer = combineReducers({
  goods: goodsReducer,
  priceRange: priceRangeReducer,
  cart: cartReducer,
  nightMode: nightModeReducer,
  search: searchProductsReducer
});

export const store = createStore(rootReducer);
