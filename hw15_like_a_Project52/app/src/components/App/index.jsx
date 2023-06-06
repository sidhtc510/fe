import { useEffect } from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/fetchActions/fetchQuery";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../../Pages/ProductPage";
import CartPage from "../../Pages/CartPage";
import Header from "../Header";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts);
    }, [dispatch]);

    return (
        <div className="mainContainer">
            <Header />
            <Routes>
                <Route path="/" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    );
}

export default App;
