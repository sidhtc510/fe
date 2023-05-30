import { loadCategoriesAction, fetchAllCategoryErrorAction } from "../reducers/categoryReducer" 
import { loadProductsAction, fetchAllProductsErrorAction } from "../reducers/productsReducer" 




export const fetchCategories = async (dispatch) =>{
    try {
        const resp = await  fetch('https://fakestoreapi.com/products/categories');
        const data = await resp.json();
        dispatch(loadCategoriesAction(data))
    } catch {
        dispatch(fetchAllCategoryErrorAction())
    }
}


export const fetchProducts = async (dispatch) =>{
    try {
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        dispatch(loadProductsAction(data))
    } catch {
        dispatch(fetchAllProductsErrorAction())
    }
}



// export const fetchCategories = dispatch =>{
//     fetch('https://fakestoreapi.com/products/categories')
//     .then(resp => resp.json())
//     .then(data=>dispatch(loadCategoriesAction(data)))
// }

// export const fetchProducts = dispatch =>{
//     try{

//         fetch('https://fakestoreap_.com/products')
//         .then(resp => resp.json())
//         .then(data=>dispatch(loadProductsAction(data)))
//     }catch{
//         dispatch(fetchAllProductsErrorAction())
//     }
// }