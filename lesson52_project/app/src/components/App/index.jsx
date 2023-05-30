import { useDispatch } from "react-redux";
import "../../App.css";
import {
  fetchCategories,
  fetchProducts,
} from "../../store/asyncActions/fetchActions";
import CategoryList from "../CategoryList";
import { useEffect } from "react";
import ProductsList from "../ProductsList";
import BascketContainer from "../BascketContainer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories);
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <div className="categoryWrapper">
      <CategoryList />
      <ProductsList />
      <BascketContainer />
    </div>
  );
}

export default App;
