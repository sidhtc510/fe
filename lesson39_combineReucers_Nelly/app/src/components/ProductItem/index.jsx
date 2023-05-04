import React from "react";
import s from './style.module.css';

export default function ProductItem({ title, price }) {
  return (
    <div className={s.product_item}>
      <p>title: {title} </p>
      <p>price:{price} </p>
    </div>
  );
}
