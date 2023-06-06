import {
    productsLoadAction,
    productsLoad_error_Action,
} from "../reducers/productsReducer";

export const fetchProducts = async (dispatch) => {
    try {
        const resp = await fetch("https://dummyjson.com/products");
        const data = await resp.json(resp);
        dispatch(productsLoadAction(data.products));
    } catch {
        dispatch(productsLoad_error_Action());
    }
};
