const initialState = {
    list: [],
    status: "loading",
};

const LOAD = "[PRODUCTS] LOAD";
const FETCH_ALL_ERROR = "[PRODUCTS] FETCH_ALL_ERROR";
const SEARCH = "[PRODUCTS] SEARCH";
const SORT = "[PRODUCTS] SORT";
const PRICE = "[PRODUCTS] PRICE";
const RATE = "[PRODUCTS] RATE";

export const loadProductsAction = (payload) => ({ type: LOAD, payload });
export const fetchAllProductsErrorAction = (payload) => ({
    type: FETCH_ALL_ERROR,
    payload,
});
export const searchProductsAction = (payload) => ({ type: SEARCH, payload });
export const sortProductsAction = (payload) => ({ type: SORT, payload });
export const priceProductsAction = (payload) => ({ type: PRICE, payload });
export const rateProductsAction = (payload) => ({ type: RATE, payload });

export const productsReducer = (state = initialState, action) => {
    // console.log(action);
    if (action.type === LOAD) {
        return {
            list: action.payload.map((item) => ({
                ...item,
                show: { search: true, price: true, rate: true },
            })),
            status: "ready",
        };
    } else if (action.type === FETCH_ALL_ERROR) {
        return {
            status: "error",
        };
    } else if (action.type === SEARCH) {
        return {
            ...state,
            list: state.list.map((item) => ({
                ...item,
                show: {
                    ...item.show,
                    search: item.title
                        .toLowerCase()
                        .includes(action.payload.toLowerCase()),
                },
            })    ),
        };
    } else if (action.type === PRICE) {
        return {
            ...state,
            list: state.list.map((item) => ({
                ...item,
                show: {
                    ...item.show,
                    price:
                        item.price >= action.payload.min &&
                        item.price <= action.payload.max,
                },
            })),
        };
    } else if (action.type === SORT) {
        if (action.payload === "price") {
            return {
                ...state,
                list: [...state.list.sort((a, b) => a.price - b.price)],
            };
        } else if (action.payload === "rating") {
            return {
                ...state,
                list: [
                    ...state.list.sort((a, b) => a.rating.rate - b.rating.rate),
                ],
            };
        } else if (action.payload === "title") {
            return {
                ...state,
                list: [
                    ...state.list.sort((a, b) =>
                        a.title.localeCompare(b.title)
                    ),
                ],
            };
        } 
    }else if (action.type === RATE) {

        // return {
        //     ...state,
        //     list: state.list.map((item) => ({
        //         ...item,
        //         show: {
        //             ...item.show,
        //             rate: action.payload ? item.rating.rate >= 4 : true,
        //         },
        //     })),
        // };

        state.list = state.list.map((item) => {
            item.show.rate = action.payload ? (item.rating.rate >= 4) : true;
            return item;
        });

        return { ...state };
    }
    
    return state;
};
