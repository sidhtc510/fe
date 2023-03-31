import React from "react";

export default function Product({ title, price }) {
  return (
    <div>
      <h3>Product</h3>
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
}
