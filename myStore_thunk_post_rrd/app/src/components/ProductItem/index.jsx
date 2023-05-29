import React from "react";
import s from "./style.module.css";
export default function ProductItem({ id, title, price, images }) {
  return (
    <div className={s.product}>
      <div>
        <p>{title}</p>
        <img src={images[0]} alt="" />
      </div>
      <div>
        <p>${price}</p>
        <button> Add to cart</button>
      </div>
    </div>
  );
}
