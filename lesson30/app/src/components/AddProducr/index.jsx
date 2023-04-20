import React from "react";
import s from "./style.module.css";

export default function AddProduct({addProduct}) {

  const onSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const price = +event.target.price.value;
    const amount = +event.target.amount.value;
    const newProduct = {
      id: Date.now(),
      title,
      price,
      amount
    };

    addProduct(newProduct);
    event.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input type="text" placeholder="title" name="title" />
      <input type="number" placeholder="price" name="price" />
      <input type="number" placeholder="amount" name="amount" />
      <button>Add</button>
    </form>
  );
}
