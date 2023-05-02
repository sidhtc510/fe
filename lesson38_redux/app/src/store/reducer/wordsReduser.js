const initialState = [
    {id:1, title: 'table'},
    {id:2, title: 'chear'}
];

export const wordsReduser = (state = initialState, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE") {
    return state.filter(({id}) => id !== action.payload);
  }
  return state;
};
