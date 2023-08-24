import React from "react";
import { useDispatch } from "react-redux";
import { decreaseAction, deleteAction, increaseAction } from "../../../store/slices/cartSlice";
import s from "./s.module.css";
export default function CartItem({ id, count, title, price, new_price, img }) {
    const dispatch = useDispatch();

    return (
        <div className={s.CartItem_wrapper}>
            <img src={img} alt="" />
            <div>
                <p>{title}</p>
                <div className={s.priceBlock}>
                    <p>{new_price === null ? "" : price}</p>
                    <p>{new_price !== null ? new_price : price}</p>

                    {/* <p className={new_price ? s.price : ""}>{price.toFixed(2)}</p>
                    {new_price && <p>{new_price.toFixed(2)}</p>} */}
                </div>
                <div className={s.controlBlock}>
                    <button onClick={() => dispatch(decreaseAction(id))}>-</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(increaseAction(id))}>+</button>
                </div>
                <button onClick={() => dispatch(deleteAction(id))}>X</button>
            </div>
        </div>
    );
}
