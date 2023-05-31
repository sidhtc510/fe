import { useState } from "react";
import "./App.css";
import ContainerWrapper from "./components/ContainerWrapper";
import ModalAddProduct from "./components/ModalAddProduct";
import { Context } from "./context";
import Notification from "./components/Notification";
import Header from "./components/Header";


function App() {
  const [modalActive, setModalActive] = useState(false);
  const [notification, setNotification] = useState({
    state: false,
    content: "",
  });



  return (
    <div>
      <Context.Provider
        value={{
          modalActive,
          setModalActive,
          notification,
          setNotification,
        }}
      >
        <Notification />
        <ModalAddProduct />
        <Header />
        <ContainerWrapper />
      </Context.Provider>
    </div>
  );
}

export default App;
