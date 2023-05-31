import { useState } from "react";
import "./App.css";
import ModalAddProduct from "./components/ModalAddProduct";
import { Context } from "./context";
import Notification from "./components/Notification";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import ContainerWrapper from "./components/ContainerWrapper";

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

        <Routes>
          <Route path="/" element={<ContainerWrapper />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
