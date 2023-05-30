import { goods } from "../../data/data";

const DELETE = "[GOODS] DELETE";
const REMOVE_PRODUCTS = "[GOODS] REMOVE_PRODUCTS";
const SORTPRICE_ASC = "[GOODS] SORTPRICE_ASC";
const SORTPRICE_DESC = "[GOODS] SORTPRICE_DESC";
const ADD_PRODUCT = "[GOODS] ADD_PRODUCT";

export const deleteAction = (payload) => ({ type: DELETE, payload });
export const removeProductsAction = () => ({ type: REMOVE_PRODUCTS });
export const sortPriceAscAction = () => ({ type: SORTPRICE_ASC });
export const sortPriceDescAction = () => ({ type: SORTPRICE_DESC });
export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });

export const goodsReducer = (state = goods, action) => {
  switch (action.type) {
    case DELETE:
      return [...state.filter((item) => item.id !== action.payload)]
    case REMOVE_PRODUCTS:
      return []
    case SORTPRICE_ASC:
     return [...state.sort((x, y) => x.price - y.price)]
    case SORTPRICE_DESC:
     return [...state.sort((x, y) => y.price - x.price) ]
    case ADD_PRODUCT:
      return [action.payload, ...state]
    default:
      return state;
  }
};
