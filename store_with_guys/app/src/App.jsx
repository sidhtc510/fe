import { useState } from "react";
import "./App.css";
import ContainerWrapper from "./components/ContainerWrapper";
import ModalAddProduct from "./components/ModalAddProduct";
import { Context } from "./context";
import Notification from "./components/Notification";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [notification, setNotification] = useState(false);
  const [notificationContent, setNotificationContent] = useState('');

  return (
    <div>
      <Context.Provider value={{ modalActive, setModalActive, notification, setNotification, setNotificationContent }}>
        <Notification notificationContent={notificationContent}/>
        <ModalAddProduct />
        <ContainerWrapper />
      </Context.Provider>
    </div>
  );
}

export default App;
