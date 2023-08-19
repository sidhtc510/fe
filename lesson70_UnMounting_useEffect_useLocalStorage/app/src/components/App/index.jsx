import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import MainPage from "../Pages/MainPage";
import AnotherPage from "../Pages/AnotherPage";

export default function App() {

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/another_page" element={<AnotherPage />} />
            </Routes>
        </div>
    );
}
