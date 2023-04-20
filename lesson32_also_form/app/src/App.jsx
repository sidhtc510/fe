import { useState } from "react";
import "./App.css";
import ItemContainer from "./components/ItemContainer";
import AddItemForm from "./components/AddItemForm";

function App() {
  const peopleDefault = [
    { id: 1, name: "Алексей", surname: "Петров", age: 25 },
    { id: 2, name: "Иван", surname: "Сидоров", age: 42 },
    { id: 3, name: "Мария", surname: "Иванова", age: 31 },
    { id: 4, name: "Анна", surname: "Смирнова", age: 18 },
    { id: 5, name: "Кирилл", surname: "Кузнецов", age: 58 },
    { id: 6, name: "Надежда", surname: "Васильева", age: 47 },
    { id: 7, name: "Павел", surname: "Морозов", age: 39 },
    { id: 8, name: "Александра", surname: "Новикова", age: 22 },
    { id: 9, name: "Дмитрий", surname: "Федоров", age: 67 },
    { id: 10, name: "Елена", surname: "Алексеева", age: 29 },
  ];

  const [people, setPeople] = useState(peopleDefault);

  const addPerson = (obj) => {
    setPeople([obj, ...people]);
  };

  return (
    <div className="appWrapper">
      <AddItemForm addPerson={addPerson} />
      <ItemContainer {...{ people }} key={people.id} />
    </div>
  );
}

export default App;
