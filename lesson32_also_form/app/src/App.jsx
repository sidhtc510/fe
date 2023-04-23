import { useState } from "react";
import "./App.css";
import ItemContainer from "./components/ItemContainer";
import AddItemForm from "./components/AddItemForm";
import { peopleDefault } from "./data/users.js";
import { Context } from "./context";

function App() {
  const [people, setPeople] = useState(peopleDefault);

  const addPerson = (obj) => {
    setPeople([obj, ...people]);
  };

  const deletePerson = (id) => {setPeople(people.filter((el) => el.id !== id))};

  return (
    <div className="appWrapper">
      <Context.Provider value={{ people, addPerson, deletePerson }}>
        <AddItemForm />
        <ItemContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
