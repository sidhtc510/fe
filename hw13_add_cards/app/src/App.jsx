import { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import ItemsContainer from "./components/ItemsContainer";

function App() {
  const [item, setItem] = useState([]);

  const deleteItem = id => setItem(item.filter(el => id !== el.id));

  const addNewItem = newItem => setItem([newItem, ...item]);

  return (
    <div>
      <AddForm addNewItem={addNewItem} />
      <ItemsContainer {...{ item, deleteItem }} key={item.id} />
    </div>
  );
}

export default App;
