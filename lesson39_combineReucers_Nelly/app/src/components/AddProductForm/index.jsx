import React from "react";
import { addProductAction } from "../../store/reducers/productsReducer";
import { useDispatch, useSelector } from "react-redux";

export default function AddProductForm() {
  const dispatch = useDispatch();


  const submit = (e) => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      title: e.target.title.value,
      price: e.target.price.value,
    };
    dispatch(addProductAction(product));
    e.target.reset();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="price" name="price" />
      <button>Add Product</button>
    </form>
  );
}
