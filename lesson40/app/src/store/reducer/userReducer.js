const ADD = "[USERS] ADD";
const REMOVE = "[USERS] REMOVE";
const INCREMENT = "[USERS] NCREMENT";
const DECREMENT = "[USERS] DECREMENT";
const RESETAGE = "[USERS] RESETAGE";

const initialState = [
  { id: 1, name: "Степан", lastname: "Иванов", age: 25, gender: "m" },
  { id: 2, name: "Ирина", lastname: "Семенова", age: 3, gender: "f" },
  { id: 3, name: "Сергей", lastname: "Петров", age: 34, gender: "m" },
];

export const addAction = (payload) => ({ type: ADD, payload });
export const removeAction = (payload) => ({ type: REMOVE, payload });
export const incrementAction = (payload) => ({ type: INCREMENT, payload });
export const decrementAction = (payload) => ({ type: DECREMENT, payload });
export const resetAgeAction = (payload) => ({ type: RESETAGE, payload });

export const userReducer = (state = initialState, action) => {
  if (action.type === REMOVE) {
    return state.filter((user) => user.id !== action.payload);
  } else if (action.type === INCREMENT) {
    // решение через find
    state.find((user) => user.id === action.payload).age++;
    return [...state];

    // решение через map
    // return state.map(item => {
    //     item.age = item.id === action.payload ? item.age +1 : item.age;
    //     return item
    // })
  } else if (action.type === DECREMENT) {
    const targ = state.find((user) => user.id === action.payload);
    if (targ.age > 0) {
      targ.age--;
    }
    return [...state];
  } else if (action.type === ADD) {
    return [...state, { id: Date.now(), ...action.payload }];
  } else if (action.type === RESETAGE) {
    state.find((user) => user.id === action.payload).age = 0;
    return [...state];
  }

  return state;
};
