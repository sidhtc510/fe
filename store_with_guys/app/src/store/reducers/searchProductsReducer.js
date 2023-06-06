const SEARCH = "[SEARCH_PRODUCTS] SEARCH";

export const searchProductsAction = (payload) => ({ type: SEARCH, payload });

export const searchProductsReducer = (state = "", action) => {
    switch (action.type) {
        case SEARCH:
           return action.payload

        default:
            return state;
    }
};
