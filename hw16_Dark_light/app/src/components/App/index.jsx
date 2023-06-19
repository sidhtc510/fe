import Header from "../Header";
import Footer from "../Footer";
import MainPage from "../Pages/MainPage";
import AuthorPage from "../Pages/AuthorPage";
import CompaniesPage from "../Pages/CompaniesPage";
import ArticlesPage from "../Pages/ArticlesPage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/author" element={<AuthorPage />} />
                <Route path="/companies" element={<CompaniesPage />} />
                <Route path="/articles" element={<ArticlesPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
