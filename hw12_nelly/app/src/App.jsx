import { useState } from "react";
import "./App.css";
import CoffeeContainer from "./components/CoffeeContainer";
import { coffeeData } from "./data/coffee.js";
import ButtonComponent from "./components/ButtonComponent";

function App() {

  const [cofeeData, setCofeeData] = useState(coffeeData);
  const deleteItem = (id) =>
    setCofeeData(cofeeData.filter((el) => el.id !== id));

  return (
    <div>
      <ButtonComponent />
      <CoffeeContainer coffeeData={cofeeData} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
