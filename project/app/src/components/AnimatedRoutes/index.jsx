import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "../../Pages/MainPage";
import AllProducts from "../../Pages/AllProducts";
import Categories from "../../Pages/Categories";
import AllSales from "../../Pages/AllSales";
import ProductPage from "../../Pages/ProductPage";
import CategoryProducts from "../../Pages/CategoryProducts";
import Cart from "../../Pages/Cart";
import PageNotFound from "../PageNotFound";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainPage />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/sales" element={<AllSales />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/categories/:id" element={<CategoryProducts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </AnimatePresence>
    );
}
