import React from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../store/reducers/productReducer";

export default function AddProductForm() {
const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    const product = {

      title: e.target.title.value,
      price: e.target.price.value,
    };

    dispatch(addProductAction(product));
    e.target.reset();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="title" placeholder="title"/>
      <input type="number" name="price" placeholder="price"/>
      <button>Add</button>
    </form>
  );
}
