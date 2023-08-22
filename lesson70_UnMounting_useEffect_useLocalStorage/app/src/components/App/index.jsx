import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import MainPage from "../Pages/MainPage";
import AnotherPage from "../Pages/AnotherPage";
import AnotherPage_two from "../Pages/AnotherPage_two";


export default function App() {


    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/another_page" element={<AnotherPage  />} />
                <Route path="/another_page_two" element={<AnotherPage_two  />} />
            </Routes>
        </div>
    );
}
