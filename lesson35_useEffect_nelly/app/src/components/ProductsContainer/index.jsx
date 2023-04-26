import React, { useEffect, useState } from "react";
import { getProducts } from "../../data/data.js";
import ProductItem from "../ProductItem/index.jsx";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return <div>
    {products.map(el=> <ProductItem  {...el} key={el.id}/>)}
  </div>;
}
