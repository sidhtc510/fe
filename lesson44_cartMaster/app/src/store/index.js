import { createStore, combineReducers } from "redux";
import { productsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";


const rootReducer = combineReducers({
  // в объект добавляем список редьюсеров ключ:название редьюсера
  products: productsReducer,
  cart: cartReducer
});

export const store = createStore(rootReducer); //Экспорт стора. этот стор будет импортирован в главный index.js и в нем же оборачиваем <App/> в <Provider>. По главному index.js информация ниже
