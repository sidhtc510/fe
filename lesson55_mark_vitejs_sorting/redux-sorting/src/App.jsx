import { products } from "./products.json";
import { useDispatch, useSelector } from "react-redux";
import { ProductGrid } from "./Product";

export function App() {
  const priceTo = useSelector((state) => state.priceTo);
  const dispatch = useDispatch();

  const handlePriceTo = (e) => {
    dispatch({ type: "filter/price/to", payload: e.target.value });
  };

  const filteredProducts =
    priceTo == "" ? products : products.filter((el) => el.price <= priceTo);

  return (
    <div>
      <label>
        Price to:
        <input onChange={handlePriceTo} value={priceTo} />
      </label>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
