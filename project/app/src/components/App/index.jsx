import "../../App.css";
import Footer from "../Footer";
import HeaderMenu from "../HeaderMenu";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchProducts } from "../../store/slice/productSlice";
import { useDispatch } from "react-redux";
import { useCart } from "../../hooks/useCart";
import { AnimatePresence } from "framer-motion";
import MainPage from "../../Pages/MainPage";
import AllProducts from "../../Pages/AllProducts";
import Categories from "../../Pages/Categories";
import AllSales from "../../Pages/AllSales";
import ProductPage from "../../Pages/ProductPage";
import CategoryProducts from "../../Pages/CategoryProducts";
import Cart from "../../Pages/Cart";
import PageNotFound from "../PageNotFound";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const cart = useCart();
    const cartQtn = cart.reduce((acc, el) => acc + el.count, 0);

    const location = useLocation();

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <HeaderMenu cartQtn={cartQtn} />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/sales" element={<AllSales />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route
                        path="/categories/:id"
                        element={<CategoryProducts />}
                    />
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
