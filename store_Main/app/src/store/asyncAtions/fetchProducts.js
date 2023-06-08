import { initialLoadingAction } from "../reducers/goodsReducer";
import { showLoader, hideLoader } from "../reducers/loaderReducer";

export const fetchProducts = async (dispatch) => {
    dispatch(showLoader());

    const resp = await fetch("https://raw.githubusercontent.com/Alucard17/PhoneAPI/master/phones.json");
    const data = await resp.json();
    dispatch(initialLoadingAction(data.mobile.slice(0, 250)));

    dispatch(hideLoader());
};
