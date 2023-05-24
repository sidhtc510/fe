import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { useEffect } from "react";
import { fetchCoffee } from "../../store/asyncActions/coffeeAPI";
import CoffeeItem from "../CoffeeItem";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffee);
  }, [dispatch]);

const coffee = useSelector(state=> state.coffee)

  return <div>
    {coffee.map(el=> <CoffeeItem key={el.id} {...el}/>)}
  </div>;
}

export default App;
