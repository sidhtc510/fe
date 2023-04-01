import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import GoodContainer from "./components/GoodContainer/GoodContainer";
import Header from "./components/Header/Header";
// import ProductContainer from "./components/ProductContainer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={GoodContainer} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
