import { useState } from "react";
import "./App.css";
import CoffeeContainer from "./components/CoffeeContainer";
import { coffeeData } from "./data/coffee.js";
import ButtonComponent from "./components/ButtonComponent";
import Toggle from "./components/Toggle";
import Todo from "./components/Todo";

function App() {
  const [cofeeData, setCofeeData] = useState(coffeeData);
  const deleteItem = (id) =>
    setCofeeData(cofeeData.filter((el) => el.id !== id));


    const tasks = [
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: false },
      { id: 3, title: 'Task 3', completed: false }
    ]

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
