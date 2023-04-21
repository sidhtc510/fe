import { useState } from "react";
import "./App.css";
import ItemContainer from "./components/ItemContainer";
import AddItemForm from "./components/AddItemForm";
import { peopleDefault } from "./data/users.js";
import { Context } from "./context.js";

function App() {
  const [people, setPeople] = useState(peopleDefault);

  const addPerson = (obj) => {
    setPeople([obj, ...people]);
  };

  return (
    <div className="appWrapper">
      <Context.Provider value={addPerson}>
        <AddItemForm {...{addPerson}}/>
        <ItemContainer {...{ people }} key={people.id} />
      </Context.Provider>
    </div>
  );
}

export default App;
