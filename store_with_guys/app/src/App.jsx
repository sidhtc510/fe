import { useState } from "react";
import "./App.css";
import ModalAddProduct from "./components/ModalAddProduct";
import { Context } from "./context";
import Notification from "./components/Notification";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import ContainerWrapper from "./components/ContainerWrapper";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";


function App() {
    const [modalActive, setModalActive] = useState(false);
    const [notification, setNotification] = useState({
        state: false,
        content: "",
    });

    const { nightMode, loader } = useSelector((state) => state);

    return (
        <div className={nightMode ? "mainWrapper nightMode" : "mainWrapper"}>
            {loader.isLoading && <Loader />}
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
