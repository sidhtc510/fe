import React from "react";

export default function Product({ title, price, count }) {
  return (
    <>
      <h4>Product</h4>
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <p>{count}</p>
      </div>
    </>
  );
}
