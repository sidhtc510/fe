import React from "react";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem";
import { clear_cart } from "../../store/reducers/cartReducer";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const amount =  cart.reduce((acc, el) => acc + el.count*Number(el.price), 0)
  

  return (
    <div className={s.cart}>
      <p>Cart</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cart.map((el) => (
          <CartItem key={el.id} {...el} />
        ))}
      </div>
      <p>Amount: {amount}</p>
      <div onClick={()=>dispatch(clear_cart())}>Clear Cart</div>
    </div>
  );
}
