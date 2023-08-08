import "../../App.css";
import s from "./s.module.css";
import { useEffect, useState } from "react";
import { Context } from "../../context";

import Nav from "../Nav";
import Offers from "../Offers";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ProductsContainer from "../ProductsContainer";
import { fetchProducts } from "../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";

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


    return (
        <Context.Provider value={{ darkMode, changeDarkMode }}>
            <div className={darkMode ? s.darkMode : s.lightMode}>
                <Nav />
                <Offers />
                <ProductsContainer />
            </div>
        </Context.Provider>
    );
}

export default App;
