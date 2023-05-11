import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  decrementAction,
  incrementAction,
  removeAction,
  resetAgeAction,
} from "../../store/reducer/userReducer";

export default function UserItem({ id, name, lastname, age, gender }) {
  const backgroundColor = gender === "m" ? "#2980b9" : "#e84393";
  const dispatch = useDispatch();

  return (
    <div className={s.item} style={{ backgroundColor }}>
      <p>
        {name} {lastname}
      </p>
      <div className={s.age_block}>
        <button onClick={() => dispatch(decrementAction(id))}>-</button>
        <p>{age}</p>
        <button onClick={() => dispatch(incrementAction(id))}>+</button>
        <button onClick={() => dispatch(resetAgeAction(id))}>0</button>
      </div>
      <button onClick={() => dispatch(removeAction(id))}>delete</button>
    </div>
  );
}
