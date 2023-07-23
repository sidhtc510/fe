import s from "./s.module.css";

import React from "react";
import { useDispatch } from "react-redux";
import { decrAction, deleteAction, incrAction, setCountAction } from "../../store/slice/cartSlice";

export default function CartItem({ id, price, discont_price, image, count }) {
    const currentPrice = discont_price ?? price;

    const dispatch = useDispatch();

    return (
        <div className={s.cartItemWrap}>
            <img src={`http://localhost:3333/${image}`} alt="" />

            <div className={s.titleCountBlock}>
                <div>
                    <p onClick={() => dispatch(decrAction(id))}>-</p>
                    <input type="number" value={count} onChange={(e) => dispatch(setCountAction({ id, count: +e.target.value }))} />
                    <p onClick={() => dispatch(incrAction(id))}>+</p>
                </div>
            </div>

            <div className={s.priceBlock}>
                <p>Price {currentPrice}</p>
                <p>Amount {(currentPrice * count).toFixed(2)}</p>
            </div>

            <p className={s.delFromCart} onClick={() => dispatch(deleteAction(id))}>
                X
            </p>
        </div>
    );
}
