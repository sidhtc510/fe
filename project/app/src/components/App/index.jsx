import "../../App.css";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../Footer";
import HeaderMenu from "../HeaderMenu";
import MainPage from "../../Pages/MainPage";
import AllProducts from "../../Pages/AllProducts";
import Categories from "../../Pages/Categories";
import AllSales from "../../Pages/AllSales";
import ProductPage from "../../Pages/ProductPage";
import CategoryProducts from "../../Pages/CategoryProducts";
import Cart from "../../Pages/Cart";
import PageNotFound from "../PageNotFound";
import MobileMenu from "../MobileMenu";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";
import { fetchCategories } from "../../store/slice/categoriesSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
    }, [dispatch]);

    const cartQtn = useCart().reduce((acc, el) => acc + el.count, 0);

    const location = useLocation();
    
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <HeaderMenu cartQtn={cartQtn} />
            <MobileMenu cartQtn={cartQtn} />
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

            <Footer />
 
        </div>
    );
}

export default App;
