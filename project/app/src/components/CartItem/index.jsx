import s from "./s.module.css";

import React from "react";
import { useDispatch } from "react-redux";
import { decrAction, deleteAction, incrAction, setCountAction } from "../../store/slice/cartSlice";
import { CiCircleRemove } from "react-icons/ci";

export default function CartItem({ id, title, price, discont_price, image, count }) {
    const currentPrice = (discont_price ?? price)*1;

    const dispatch = useDispatch();

    return (
        <div className={s.cartItemWrap}>
            <img src={`http://localhost:3333/${image}`} alt="" />
            <div className={s.titleCountBlock}>
                <p>{title}</p>
                <div>
                    <p onClick={() => dispatch(decrAction(id))}>-</p>
                    <input type="number" value={count} onChange={(e) => dispatch(setCountAction({ id, count: +e.target.value }))} />
                    <p onClick={() => dispatch(incrAction(id))}>+</p>
                </div>
            </div>

            <div className={s.priceBlock}>
                <p>
                    Price: <span>{currentPrice.toFixed(2)}</span>
                </p>
                <p>
                    Amount: <span>{(currentPrice * count).toFixed(2)}</span>
                </p>
            </div>

            <p className={s.delFromCart} onClick={() => dispatch(deleteAction(id))}>
                <CiCircleRemove />
            </p>
        </div>
    );
}
