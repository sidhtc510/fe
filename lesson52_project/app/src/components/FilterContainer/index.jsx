import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { searchProductsAction } from "../../store/reducers/productsReducer";

export default function FilterContainer() {
  const dispatch = useDispatch();

  const searchHandler = ({target}) => {
    dispatch(searchProductsAction(target.value));
  };

  return (
    <div className={s.container}>
      <input
        type="text"
        onChange={searchHandler}
        placeholder="search products"
      />
    </div>
  );
}
