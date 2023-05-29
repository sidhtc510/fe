import { useState } from "react";
import "./App.css";
import ContainerWrapper from "./components/ContainerWrapper";
import ModalAddProduct from "./components/ModalAddProduct";
import { Context } from "./context";
import Notification from "./components/Notification";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [notification, setNotification] = useState({
    state: false,
    content: "",
  });
  const [whichStateWeUse, setWhichStateWeUse] = useState("Products");

  return (
    <div>
      <Context.Provider
        value={{
          modalActive,
          setModalActive,
          notification,
          setNotification,
          whichStateWeUse,
          setWhichStateWeUse,
        }}
      >
        <Notification />
        <ModalAddProduct />
        <ContainerWrapper />
      </Context.Provider>
    </div>
  );
}

export default App;
