import { loadCategoriesAction } from "../reducers/categoriesReducer";
import { loadProductsAction } from "../reducers/productsReducer";

export const fetchProducts = (categoryId) => (dispatch) => {
  const url = categoryId
    ? `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
    : "https://api.escuelajs.co/api/v1/products";
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      dispatch(loadProductsAction(data));
    });
};

export const fetchCategories = (dispatch) => {
  fetch("https://api.escuelajs.co/api/v1/categories")
    .then((resp) => resp.json())
    .then((data) => {
      dispatch(loadCategoriesAction(data));
    });
};
