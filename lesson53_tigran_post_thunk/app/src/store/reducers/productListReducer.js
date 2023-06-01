const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
const FILTER_BY_CHAR_PRODUCT = "FILTER_BY_CHAR_PRODUCT";
const SORT_PRODUCT_LIST = "SORT_PRODUCT_LIST";

export const addNewProductsAction = (payload) => ({
  type: ADD_NEW_PRODUCT,
  payload,
});
export const filterByCharProductsAction = (payload) => ({
  type: FILTER_BY_CHAR_PRODUCT,
  payload,
});
export const sortProductsAction = (payload) => ({

  type: SORT_PRODUCT_LIST,
  payload,
});

export const productListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return action.payload.map((elem) => ({ ...elem, show: true }));
    case SORT_PRODUCT_LIST:
      console.log(action.payload);
      if (action.payload === '1') {
        return state.slice().sort((a, b) => a.price - b.price);
      } else if (action.payload === '2') {
        return state.slice().sort((a, b) => b.price - a.price);
      } else if (action.payload === '0') {
        return state.slice().sort((a, b) => a.id - b.id);
      }

    case FILTER_BY_CHAR_PRODUCT:
      state = state.map((elem) => ({ ...elem, show: true }));
      return state.map((elem) => {
        let title = elem.title.toLowerCase();
        let input_value = action.payload.toLowerCase();
        if (!title.includes(input_value)) {
          elem.show = false;
        }
        return elem;
      });

    default:
      return state;
  }
};
