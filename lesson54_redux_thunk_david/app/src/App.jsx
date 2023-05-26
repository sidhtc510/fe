import "./App.css";
import MainPage from "./pages/MainPage";
import Loader from "./components/Loader";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const isLoading = useSelector((state) => state.loader.isLoading);
  return (
    <div>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
