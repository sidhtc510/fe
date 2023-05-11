import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../App/ProductItem";

export default function ProductsList() {
  const products = useSelector((state) => state.products);
  const style = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "900px",
    margin: "0 auto"
  };

  return (
    <div style={style}>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}
