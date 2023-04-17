import { useState } from "react";
import "./App.css";
import CoffeeContainer from "./components/CoffeeContainer";
import { coffeeData } from "./data/coffee.js";
import ButtonComponent from "./components/ButtonComponent";
import Toggle from "./components/Toggle";
import Todo from "./components/Todo";
import { tasks } from "./data/tasks";

function App() {
  const [cofeeData, setCofeeData] = useState(coffeeData);
  const deleteItem = (id) =>
    setCofeeData(cofeeData.filter((el) => el.id !== id));

    
    const [todoState, setTodoState] = useState(tasks)

    const changeStatus = (id) => {
      const newState = todoState.map((elem) => {
        if (elem.id === id) {
          elem.completed = elem.completed === 0 ? 1 : 0;
        }
        return elem;
      });
      setTodoState(newState);
    };

  return (
    <div>
      <Todo tasks={todoState} changeStatus={changeStatus} key={tasks.id}/>
      <Toggle />
      <ButtonComponent />
      <CoffeeContainer coffeeData={cofeeData} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
