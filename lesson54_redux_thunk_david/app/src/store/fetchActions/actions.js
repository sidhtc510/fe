import { loadCategoryAction } from "../reducers/categoryReducer";
import { showLoader, hideLoader } from "../reducers/loaderReducer";
import { productsLoader } from "../reducers/productsReducer";

export const fetchAction = (dispatch) => {
  dispatch(showLoader());
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => {
      dispatch(loadCategoryAction(json));
    
      dispatch(hideLoader());
    });
};

export const loadProducts = (dispatch, category) => {
  dispatch(showLoader());
  const url = `https://fakestoreapi.com/products/category/${category}`
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      dispatch(productsLoader(json));
      dispatch(hideLoader());
    });
};

// ---------------------------------------------------------------------------------
// import {loadCategoryAction } from '../reducers/categoryReducer'
// import {showLoader, hideLoader} from '../reducer/loaderReducer'

// export const fetchAction = async (dispatch) => {
    
//     dispatch(showLoader());

//     const resp = await fetch('https://fakestoreapi.com/products/categories');
//     const data = await resp.json();
//     dispatch(loadCategoryAction(data))

//     dispatch(hideLoader());
           
// }


// ---------------------------------------------------------------------------------
// import {fetchAction } from '../reducer/categoryReducer'
// import {showLoader, hideLoader} from '../reducer/loaderReducer'

// export const fetchCategory = async (dispatch) => {
    
//     dispatch(showLoader());

//     const resp = await fetch('https://fakestoreapi.com/products/categories');
//     const data = await resp.json();
//     dispatch(fetchAction(data))

//     dispatch(hideLoader());
           
// }