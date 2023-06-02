import React from "react";
import { useDispatch } from "react-redux";
import { filterByCharProductsAction, sortProductsAction } from "../../store/reducers/productListReducer";

export default function FilterProducts() {
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    dispatch(filterByCharProductsAction(e.target.value));
  };
  const selectHandler = (e) => {
    dispatch(sortProductsAction(e.target.value))
  };

  return (
    <div>
      <input type="text" onChange={inputHandler} placeholder="search" />
      <select name="" id="" onChange={selectHandler}>
        <option value={0}>default</option>
        <option value={1}>up</option>
        <option value={2}>down</option>
      </select>
    </div>
  );
}
