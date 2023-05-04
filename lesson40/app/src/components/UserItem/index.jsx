import React from "react";
import s from './style.module.css'
import { useDispatch } from "react-redux";

export default function UserItem({ id, name, lastname, age, gender }) {

  const  backgroundColor = gender === "m" ? "#2980b9" :  "#e84393";
const dispatch = useDispatch()

  return (
    <div className={s.item} style={{backgroundColor}}>
      <p>{name} {lastname}</p>
      <div className={s.age_block}>
        <button onClick={()=>dispatch({type:"DECREMENT", payload: id})}>-</button>
        <p>{age}</p>
        <button onClick={()=>dispatch({type:"INCREMENT", payload: id})}>+</button>
      </div>
      <button onClick={()=> dispatch({type: "REMOVE", payload: id})}>delete</button>
    </div>
  );
}
