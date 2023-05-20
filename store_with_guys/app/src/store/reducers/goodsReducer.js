import { goods } from "../../data/data";

const DELETE = "[GOODS] DELETE";
const PRICE_RANGE = "[GOODS] PRICE_RANGE";
const REMOVE_PRODUCTS = "[GOODS] REMOVE_PRODUCTS";
const SORTPRICE_ASC = "[GOODS] SORTPRICE_ASC";
const SORTPRICE_DESC = "[GOODS] SORTPRICE_DESC";
const ADD_PRODUCT = "[GOODS] ADD_PRODUCT";

export const deleteAction = (payload) => ({ type: DELETE, payload });
export const priceRangeAction = (payload) => ({ type: PRICE_RANGE, payload });
export const removeProductsAction = () => ({ type: REMOVE_PRODUCTS });
export const sortPriceAscAction = () => ({ type: SORTPRICE_ASC });
export const sortPriceDescAction = () => ({ type: SORTPRICE_DESC });
export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });

// export const goodsReducer = (state = goods, action) => {
//   if (action.type === DELETE) {
//     return {products:[...state.products.filter((item) => item.id !== action.payload)], filteredProducts:[...state.filteredProducts.filter((item) => item.id !== action.payload)]};
//   } else if (action.type === PRICE_RANGE) {
//     return {products:[...state.products], filteredProducts:[...state.products.filter(
//       (item) =>
//         item.price >= action.payload.minPrice &&
//         item.price <= action.payload.maxPrice
//     )]};
//   } else if (action.type === REMOVE_PRODUCTS) {
//     return {
//       products:[],
//       filteredProducts:[]
//     };
//   } else if (action.type === SORTPRICE_ASC) {

//     if(state.filteredProducts.length > 0){
//       return {products:[...state.products], filteredProducts:[...state.filteredProducts.sort((x, y) => x.price - y.price)]};
//     }
//     else{
//       return {products:[...state.products.sort((x, y) => x.price - y.price)], filteredProducts:[]};
//     };
//   } else if (action.type === SORTPRICE_DESC) {
//     if(state.filteredProducts.length > 0){
//       return {products:[...state.products], filteredProducts:[...state.filteredProducts.sort((x, y) => y.price - x.price)]};
//     }
//     else{
//       return {products:[...state.products.sort((x, y) => y.price - x.price)], filteredProducts:[]};
//     };
//   } else if (action.type === ADD_PRODUCT) {
//     return {products:[action.payload, ...state.products], filteredProducts:[]};
//   }

//   return state;
// };

export const goodsReducer = (state = goods, action) => {
  switch (action.type) {
    case DELETE:
      return {
        products: [
          ...state.products.filter((item) => item.id !== action.payload),
        ],
        filteredProducts: [
          ...state.filteredProducts.filter(
            (item) => item.id !== action.payload
          ),
        ],
      };
    case PRICE_RANGE:
      return {
        products: [...state.products],
        filteredProducts: [
          ...state.products.filter(
            (item) =>
              item.price >= action.payload.minPrice &&
              item.price <= action.payload.maxPrice
          ),
        ],
      };
    case REMOVE_PRODUCTS:
      return {
        products: [],
        filteredProducts: [],
      };
    case SORTPRICE_ASC:
      if (state.filteredProducts.length > 0) {
        return {
          products: [...state.products],
          filteredProducts: [
            ...state.filteredProducts.sort((x, y) => x.price - y.price),
          ],
        };
      } else {
        return {
          products: [...state.products.sort((x, y) => x.price - y.price)],
          filteredProducts: [],
        };
      }
    case SORTPRICE_DESC:
      if (state.filteredProducts.length > 0) {
        return {
          products: [...state.products],
          filteredProducts: [
            ...state.filteredProducts.sort((x, y) => y.price - x.price),
          ],
        };
      } else {
        return {
          products: [...state.products.sort((x, y) => y.price - x.price)],
          filteredProducts: [],
        };
      }
    case ADD_PRODUCT:
      return {
        products: [action.payload, ...state.products],
        filteredProducts: [],
      };
    default:
      return state;
  }
};
