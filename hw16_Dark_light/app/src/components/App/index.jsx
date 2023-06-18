import s from "./s.module.css";
import Header from "../Header";
import Footer from "../Footer";
import MainPage from "../Pages/MainPage";
import AuthorPage from "../Pages/AuthorPage";
import CompaniesPage from "../Pages/CompaniesPage";
import ArticlesPage from "../Pages/ArticlesPage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className={s.mainContainer}>
            <Header />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/author" element={<AuthorPage />} />
                <Route path="/companies" element={<CompaniesPage />} />
                <Route path="/articles" element={<ArticlesPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
