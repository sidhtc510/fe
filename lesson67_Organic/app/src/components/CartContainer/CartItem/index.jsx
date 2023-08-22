import React from "react";
import { useDispatch } from "react-redux";
import { decreaseAction, increaseAction } from "../../../store/slices/cartSlice";

export default function CartItem({ id, count, title, price }) {
    const dispatch = useDispatch();



    return (
        <div>
            <p>
                Title: {title} Count: {count} Price: {price} Amount: {count*price}
                <button onClick={() => dispatch(decreaseAction(id))}>-</button>
                <button onClick={() => dispatch(increaseAction(id))}>+</button>
            </p>
        </div>
    );
}
