import "../../App.css";
import MainPage from "../../Pages/MainPage";
import Footer from "../Footer";
import HeaderMenu from "../HeaderMenu";
import Categories from "../../Pages/Categories";
import AllProducts from "../../Pages/AllProducts";
import AllSales from "../../Pages/AllSales";
import ProductPage from "../../Pages/ProductPage";
import Cart from "../../Pages/Cart";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import CategoryProducts from "../../Pages/CategoryProducts";
import Button from "../UI/Button";
import PageNotFound from "../PageNotFound";
import { useEffect } from "react";

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <HeaderMenu />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/sales" element={<AllSales />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/categories/:id" element={<CategoryProducts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
