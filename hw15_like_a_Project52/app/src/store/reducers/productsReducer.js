const initialState = {
    productsList: [],
    status: "loading",
};

const LOAD = "[PRODUCTS] LOAD";
const ERROR = "[PRODUCTS] ERROR";
const SEARCH = "[PRODUCTS] SEARCH";

export const productsLoadAction = (payload) => ({ type: LOAD, payload });
export const productsLoad_error_Action = () => ({ type: ERROR });
export const productsSearchAction = (payload) => ({ type: SEARCH, payload });

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                productsList: action.payload.map((el) => ({
                    ...el,
                    show: true,
                })),
                status: "ready",
            };
        case ERROR:
            return { status: "error" };
        case SEARCH:
            return {
                ...state,
                productsList: state.productsList.map((el) => ({
                    ...el,
                    show: el.title
                        .toLowerCase()
                        .includes(action.payload.toLowerCase()),
                })),
            };
        default:
            return state;
    }
};
