import React, { useContext } from "react";
import { Context } from "../../context";

export default function AddForm() {
  const { addNewItem } = useContext(Context);

  const createItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title: e.target.title.value,
      price: +e.target.price.value,
    };
    addNewItem(newItem);
  };

  return (
    <form className="form" onSubmit={createItem}>
      <input type="text" name="title" placeholder="title" />
      <input type="number" name="price" placeholder="price" />
      <button>Add</button>
    </form>
  );
}
