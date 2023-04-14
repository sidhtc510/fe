import "./App.css";
import CoffeeContainer from "./components/CoffeeContainer";
import {coffeeData} from "./data/coffee.js"

function App() {
  return (
    <div>
      <CoffeeContainer coffeeData = {coffeeData}/>
    </div>
  );
}

export default App;
