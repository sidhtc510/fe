import "./App.css";
import FilterProducts from "./components/FilterProducts";
import Form from "./components/Form";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Form />
      <FilterProducts />
      <ProductList />
    </div>
  );
}

export default App;
