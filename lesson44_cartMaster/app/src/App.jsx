import "./App.css";
import AddProductForm from "./components/AddProductForm";
import ProductsContainer from "./components/ProductsContainer";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products_page" element={<ProductsPage />} />
        <Route path="/cart_page" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
