import { useState } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct";
import ContainerWrapper from "./components/ContainerWrapper";
import { Context } from "./context";

function App() {
  const [addProductModalIsActive, setAddProductModalIsActive] = useState(false);

  const modalIsActive = () => {
    setAddProductModalIsActive(!addProductModalIsActive);
  };

  return (
    <div>
      <Context.Provider value={{ modalIsActive, addProductModalIsActive }}>
        <AddProduct />
        <ContainerWrapper />
      </Context.Provider>
    </div>
  );
}

export default App;
