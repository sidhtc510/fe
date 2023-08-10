import "../../App.css";
import s from "./s.module.css";
import { useEffect, useState } from "react";
import { Context } from "../../context";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Nav from "../Nav";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import ProductsContainer from "../ProductsContainer";
import { fetchProducts } from "../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "../Pages/MainPage";

function App() {
    const dispatch = useDispatch();
    // const [darkMode, setDarkMode] = useState(() => {
    //     return !!+(localStorage.getItem("darkMode"));
    // });

    // useEffect(() => {
    //     localStorage.setItem("darkMode", +darkMode);
    // }, [darkMode]);

    const [darkMode, setDarkMode] = useLocalStorage(false, "darkMode");

    const changeDarkMode = ({ target }) => {
        setDarkMode(target.checked);
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Context.Provider value={{ darkMode, changeDarkMode }}>
            <div className={darkMode ? s.darkMode : s.lightMode}>
                <Nav />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<ProductsContainer  />} />
                </Routes>
                <Link to={"/products"} className={s.button}>All products</Link>
            </div>
        </Context.Provider>
    );
}

export default App;
