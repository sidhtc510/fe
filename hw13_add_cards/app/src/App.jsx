import { useState } from "react";
import "./App.css";
import {Context} from './context.js'
import AddForm from "./components/AddForm";
import ItemsContainer from "./components/ItemsContainer";


function App() {
  const [item, setItem] = useState([]);


  const deleteItem = (id) => setItem(item.filter((el) => id !== el.id));

  const addNewItem = (newItem) => setItem([newItem, ...item]);

  return (
    <div>
      <Context.Provider value={{deleteItem}}>
        <AddForm addNewItem={addNewItem} />
        <ItemsContainer {...{item}} key={item.id} />
      </Context.Provider>
    </div>
  );
}

export default App;
