import React from "react";
import { useSelector } from "react-redux";
import ProductsItem from "../ProductItem";

export default function ProductsList() {
  const { status, list } = useSelector(({ products }) => products);
console.log(list);
  return (
    <div className="productsList">
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        "Error..."
      ) : (
         list
         .filter(({show})=>show)
         .map((el) =>  <ProductsItem key={el.id} {...el} />)
        //  .map((el) => el.show && <ProductsItem key={el.id} {...el} />)
      )}
    </div>
  );
}
