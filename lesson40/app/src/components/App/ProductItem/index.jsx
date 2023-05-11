import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { removeProductAction, removeDiscountAction } from "../../../store/reducer/productReducer";

export default function ProductItem({ id, title, price, discount }) {

    const dispatch = useDispatch()


  return (
    <div className={s.item}>
      {title}
      <p className={!!discount ? s.price : ''}>
        {price}
      </p>
      {!!discount ? (<p className={s.discount}>{price - (price * discount) / 100}</p>) : ("")}
      <button onClick={()=>{dispatch(removeProductAction(id))}}>Delete</button>
     {!!discount ? <button onClick={()=>{dispatch(removeDiscountAction(id))}} >Remove discount</button> : ""}  

    </div>
  );
}
