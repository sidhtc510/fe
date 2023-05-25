// const initialState = [
//     {id:1,title:'tovar1', img: "https://img.freepik.com/free-photo/white-bicycle-standing-in-park_1153-7319.jpg"},
//     {id:2,title:'tovar2', img: "https://img.freepik.com/free-photo/white-bicycle-standing-in-park_1153-7319.jpg"},
//     {id:3,title:'tovar3', img: "https://img.freepik.com/free-photo/white-bicycle-standing-in-park_1153-7319.jpg"},
//     {id:4,title:'tovar4', img: "https://img.freepik.com/free-photo/white-bicycle-standing-in-park_1153-7319.jpg"},
//     {id:5,title:'tovar5', img: "https://img.freepik.com/free-photo/white-bicycle-standing-in-park_1153-7319.jpg"},
//     {id:6,title:'tovar6', img: "https://img.freepik.com/free-photo/white-bicycle-standing-in-park_1153-7319.jpg"},
// ]

const LOAD = "[PRODUCTS] LOAD"

export const loadProductsAction = payload => ({type: LOAD, payload})

export const productsReducer = (state = [], action) => {
  if (action.type === LOAD) {
    return action.payload
  }
  return state;
};


