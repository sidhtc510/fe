import React from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { increment, decrement, delete_product_from_cart } from "../../store/reducers/cartReducer";

export default function CartItem({ id, title, price, count }) {
  const dispatch = useDispatch();

  return (
    <div className={s.cart_item}>
      <p onClick={()=>{dispatch(delete_product_from_cart(id))}}>X</p>
      <p>title-{title}</p>
      <p>price-{price}</p>
      <p>count-{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(decrement(id));
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(increment(id));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
