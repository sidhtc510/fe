const initialState = {
    list: [],
    status: "loading",
};

const LOAD = "[CATEGORY] LOAD";
const FETCH_ALL_ERROR_CATEGORY = "[CATEGORY] ERROR";

export const loadCategoriesAction = (payload) => ({ type: LOAD, payload });
export const fetchAllCategoryErrorAction = (payload) => ({
    type: FETCH_ALL_ERROR_CATEGORY,
    payload,
});

export const categoryReducer = (state = initialState, action) => {
    if (action.type === LOAD) {
        return {
            list: action.payload,
            status: "ready",
        };
    } else if (action.type === FETCH_ALL_ERROR_CATEGORY) {
        return {
            status: "error",
        };
    }
    return state;
};
