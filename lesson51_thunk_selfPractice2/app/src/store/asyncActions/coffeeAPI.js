import { coffeeAction } from "../reducers/coffeeReducer" 

export const fetchCoffee = (dispatch)=>{
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(resp => resp.json())
    .then(data =>dispatch(coffeeAction(data)))
}