import { applyMiddleware, combineReducers, createStore } from "redux";
import { goodsReducer } from "./reducers/goodsReducer";
import { priceRangeReducer } from "./reducers/priceRangeReducer";
import { cartReducer } from "./reducers/cartReducer";
import { nightModeReducer } from "./reducers/nightModeReducer";
import { searchProductsReducer } from "./reducers/searchProductsReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import Thunk from 'redux-thunk'

const rootReducer = combineReducers({
  goods: goodsReducer,
  priceRange: priceRangeReducer,
  cart: cartReducer,
  nightMode: nightModeReducer,
  search: searchProductsReducer,
  loader:loaderReducer
});

export const store = createStore(rootReducer, applyMiddleware(Thunk));
