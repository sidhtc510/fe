import "./App.css";
import MainPage from "./Pages/MainPage";
import HeaderMenu from "./components/HeaderMenu";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <HeaderMenu />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<MainPage />} />
                {/* <Route path="/products" element={<MainPage />} />
                <Route path="/sales" element={<MainPage />} /> */}
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
