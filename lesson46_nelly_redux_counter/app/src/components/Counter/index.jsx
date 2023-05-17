import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { decrementAction, incrementAction, resetAction, plusAction } from "../../store/reducers/counterReducer";

export default function Counter() {
  const counter_state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const submit =(e)=>{
    e.preventDefault()
    dispatch(plusAction(+e.target.num.value))
    e.target.reset()
  }

  return (
    <div className={s.counter}>
      <p>{counter_state}</p>
      <button onClick={()=>dispatch(decrementAction())}>-</button>
      <button onClick={()=>dispatch(incrementAction())}>+</button>
      <button onClick={()=>dispatch(resetAction())}>0</button>

      <form onSubmit={submit}>
        <input type="number" name="num"/>
        <button>Add</button>
      </form>
    </div>
  );
}
