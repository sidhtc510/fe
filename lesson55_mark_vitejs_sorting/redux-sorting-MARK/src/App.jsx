import { useDispatch, useSelector } from "react-redux";

import { ProductGrid } from "./Product.jsx";

import { products } from "./products.json";

export function App() {
  const priceTo = useSelector((state) => state.priceTo);
  const dispatch = useDispatch();
  const handlePriceTo = (e) =>
    dispatch({ type: "filter/price/to", payload: e.target.value });

  const filteredProducts =
    priceTo === ""
      ? products
      : products.filter(({ price }) => price <= Number(priceTo));

  const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

  return (
    <>
      <label>
        Price to:
        <input onChange={handlePriceTo} value={priceTo} />
      </label>
      <label>
        Sorting:
        <select>
          <option>Default</option>
          <option value="">Price</option>
          <option value="">Name</option>
        </select>
      </label>
      <ProductGrid products={filteredProducts} />
    </>
  );
}
