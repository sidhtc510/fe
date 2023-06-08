import { useDispatch } from "react-redux";
import "../../App.css";
import {
    fetchCategories,
    fetchProducts,
} from "../../store/asyncActions/fetchActions";
import { useEffect } from "react";
import CategoriesPage from "../Pages/CategoriesPage";
import ProductsPage from "../Pages/ProductsPage";
import CartPage from "../Pages/CartPage";
import { Routes, Route } from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories);
        dispatch(fetchProducts);
    }, [dispatch]);

    return (
        <div className="categoryWrapper">
            <Routes>
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    );
}

export default App;
