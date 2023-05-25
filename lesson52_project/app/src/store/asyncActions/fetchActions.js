import { loadCategoriesAction } from "../reducers/categoryReducer" 
import { loadProductsAction } from "../reducers/productsReducer" 

export const fetchCategories = dispatch =>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(resp => resp.json())
    .then(data=>dispatch(loadCategoriesAction(data)))
}

export const fetchProducts = dispatch =>{
    fetch('https://fakestoreapi.com/products')
    .then(resp => resp.json())
    .then(data=>dispatch(loadProductsAction(data)))
}