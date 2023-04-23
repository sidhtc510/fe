import { useState } from "react";
import "./App.css";
import {Context} from './context'
import AddForm from "./components/AddForm";
import ItemsContainer from "./components/ItemsContainer";


function App() {
  const [item, setItem] = useState([]);

  const deleteItem = (id) => setItem(item.filter((el) => id !== el.id));

  const addNewItem = (newItem) => setItem([newItem, ...item]);

  return (
    <div>
      <Context.Provider value={{item, deleteItem, addNewItem}}>
        <AddForm />
        <ItemsContainer  />
      </Context.Provider>
    </div>
  );
}

export default App;
