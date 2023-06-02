import React from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../../store/itemReducer";

export default function AddForm() {
      const dispatch = useDispatch();

      const createItem = (e) => {
            e.preventDefault();
            const newItem = {
                  id: Date.now(),
                  title: e.target.title.value,
                  price: +e.target.price.value,
            };
            dispatch(addAction(newItem));
      };

      return (
            <form className="form" onSubmit={createItem}>
                  <input type="text" name="title" placeholder="title" />
                  <input type="number" name="price" placeholder="price" />
                  <button>Add</button>
            </form>
      );
}
