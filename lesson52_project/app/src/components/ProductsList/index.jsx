import React from "react";
import { useSelector } from "react-redux";
import ProductsItem from "../ProductItem";

export default function ProductsList() {
  const products = useSelector((state) => state.products);

  console.log(products);
  return (
    <div className="productsList">
      {products.map((el) => (
        <ProductsItem key={el.id} {...el} />
      ))}
    </div>
  );
}
