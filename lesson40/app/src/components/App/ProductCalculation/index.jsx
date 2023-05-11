import React from "react";
import { useSelector } from "react-redux";
import s from './style.module.css'

export default function ProductCalculation() {
  const products = useSelector((state) => state.products);

  return (
    <div className={s.container}>
      <p>products quantity: {products.length}</p>
      <p>amount: {products.reduce((acc, {price, discount}) => acc+price-price/100 * (discount ?? 0),0)}</p>
    </div>
  );
}
