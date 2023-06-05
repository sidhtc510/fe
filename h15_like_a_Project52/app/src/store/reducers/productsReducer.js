const initialState = {
    productsList: [],
    status: "loading",
};

const LOAD = "[PRODUCTS] LOAD";
const ERROR = "[PRODUCTS] ERROR";

export const productsLoadAction = (payload) => ({ type: LOAD, payload });
export const productsLoad_error_Action = () => ({ type: ERROR });

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return { productsList: action.payload, status: "ready" };
        case ERROR:
            return { status: "error" };

        default:
            return state;
    }
};
