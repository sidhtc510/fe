const initialState = [
  {
    id: 1,
    rus: "russs",
    eng: "engggg",
    lang: "eng",
  },
];

export const wordsReducer = (state = initialState, action) => {
  if (action.type === "ADD_WORD") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_CARD") {
    return state.filter((el) => el.id !== action.payload);
  } else if (action.type === "CHANGE") {
    // вариант через find
    const target_card = state.find((el) => el.id === action.payload);
    target_card.lang = target_card.lang === "eng" ? "rus" : "eng";
    return [...state];

    // вариант через map
    // return state.map((el) => {
    //   if (el.id === action.payload) {
    //     el.lang = el.lang === "eng" ? "rus" : "eng";
    //   }
    //   return el;
    // });

  } else {
    return state;
  }
};
