import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import NavMenu from "./components/NavMenu";
import UserDescriptionPage from "./pages/UserDescriptionPage";

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products_page" element={<ProductsPage />} />
        <Route path="/users_page" element={<UsersPage />} />
        <Route path="/user/:id" element={<UserDescriptionPage />} />
      </Routes>
    </div>
  );
}

export default App;
