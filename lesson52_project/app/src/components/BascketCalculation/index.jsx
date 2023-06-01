import React from "react";
import { useDispatch } from "react-redux";
import { ClearBascketAction } from "../../store/reducers/bascketReducer";
import s from "./style.module.css";

export default function BascketCalculation({ result }) {
  const dispatch = useDispatch();
  const amount = result
    .reduce((acc, el) => acc + el.price * el.count, 0)
    .toFixed(2);

  return (
    
    <div>
      <div className={s.container}>
        <p>Amount : {amount}</p>
      </div>
      <button onClick={() => dispatch(ClearBascketAction())}>ClearCart</button>
    </div>
  );
}
