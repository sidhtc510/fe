import { loadProductsAction } from "../reducers/productsReducer";

  
  export const fetchProducts = async (dispatch) => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    const clearData = data.products
    dispatch(loadProductsAction(clearData));
  };
  