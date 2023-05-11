const REMOVE_PRODUCT = "[PRODUCTS] REMOVE_PRODUCT";
const REMOVE_DISCOUNT = "[PRODUCTS] REMOVE_DISCOUNT";

const initialState = [
  { id: 1, title: "велосипед", price: 4300, discount: 5 },
  { id: 2, title: "ролики", price: 400, discount: 10 },
  { id: 3, title: "самокат", price: 500, discount: 7 },
  { id: 4, title: "лыжи", price: 2300},
  { id: 5, title: "коньки", price: 720 },
  { id: 6, title: "сноуборд", price: 1200, discount: 5 },
];

export const removeProductAction = (payload) => ({
  type: REMOVE_PRODUCT,
  payload,
});
export const removeDiscountAction = (payload) => ({
  type: REMOVE_DISCOUNT,
  payload,
});

export const productReducer = (state = initialState, action) => {
  if (action.type === REMOVE_PRODUCT) {
    return state.filter((product) => product.id !== action.payload);
  } else if (action.type === REMOVE_DISCOUNT) {
// return state.map(({discount, ...item}) => item.id === action.payload ? item: {discount, ...item})
    delete state.find((product) => product.id === action.payload).discount;
    return [...state];
  }

  return state;
};
