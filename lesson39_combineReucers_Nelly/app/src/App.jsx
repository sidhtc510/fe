import "./App.css";
import AddProductForm from "./components/AddProductForm";
import AddWordForm from "./components/AddWordForm";
import ProductsContainer from "./components/ProductsContainer";
import WordsContainer from "./components/WordsContainer";

function App() {
  return (
    <div>
      <AddProductForm />
      <ProductsContainer />

      <br />
      <br />
      <br />

      <AddWordForm />
      <WordsContainer />
    </div>
  );
}

export default App;
