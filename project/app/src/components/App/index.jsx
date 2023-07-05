import "../../App.css";
import MainPage from "../../Pages/MainPage";
import Footer from "../Footer";
import HeaderMenu from "../HeaderMenu";
import Categories from "../../Pages/Categories";
import AllProducts from "../../Pages/AllProducts";
import AllSales from "../../Pages/AllSales";
import ProductPage from "../../Pages/ProductPage";
import Cart from "../../Pages/Cart";
import { Routes, Route } from "react-router-dom";
import CategoryProducts from "../../Pages/CategoryProducts";

function App() {
    return (
        <div>
            <HeaderMenu />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/sales" element={<AllSales />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/categories/:id" element={<CategoryProducts />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
