import React from "react";
import s from "./s.module.css";
import { clearCartAction } from "../../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
export default function CartAmount({ productsInCart }) {
    const dispatch = useDispatch();
    const old_amount = productsInCart.reduce((acc, { count, price, new_price }) => acc + count * price, 0);
    const amount = productsInCart.reduce((acc, { count, price, new_price }) => acc + count * (new_price ?? price), 0);

    return (
        <div className={s.CartAmount_wrapper}>
            total: {amount} (скидка составляет: {old_amount-amount})
            <button onClick={()=>dispatch(clearCartAction())}>Clear Cart</button>
        </div>
    );
}
