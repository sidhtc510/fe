import { useState } from "react";
import "./App.css";
import ContainerWrapper from "./components/ContainerWrapper";
import ModalAddProduct from "./components/ModalAddProduct";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <ModalAddProduct {...{modalActive, setModalActive}}/>
      <ContainerWrapper setModalActive={setModalActive}/>
    </div>
  );
}

export default App;
