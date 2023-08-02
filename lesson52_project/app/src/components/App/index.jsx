import { useDispatch } from "react-redux";
import "../../App.css";
// import {
//     fetchCategories,
//     fetchProducts,
// } from "../../store/asyncActions/fetchActions";
import { useEffect } from "react";
import CategoriesPage from "../Pages/CategoriesPage";
import ProductsPage from "../Pages/ProductsPage";
import CartPage from "../Pages/CartPage";
import { Routes, Route } from "react-router-dom";
import NavMenu from "../NavMenu";
import { fetchCategories } from "../../store/slice/categorySlice";
import { fetchProducts } from "../../store/slice/productsSlice";
// import CategoryProductsPage from "../Pages/CategoryProductsPage";


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, [dispatch]);
    

    return (
        <div className="categoryWrapper">
            <NavMenu />
            <Routes>
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/products" element={<ProductsPage />} end />
                <Route path="/products/:categoryName" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    );
}

export default App;
