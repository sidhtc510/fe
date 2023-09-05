import s from "./s.module.css";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrAction, deleteAction, incrAction, setCountAction } from "../../store/slice/cartSlice";
import { CiCircleRemove, CiTrash } from "react-icons/ci";


export default function CartItem({ id, title, price, discont_price, image, count }) {
    const currentPrice = (discont_price ?? price) * 1;

    const dispatch = useDispatch();

    const [confirmDeleting, setConfirmDeleting] = useState(false);

    const deleteItem = () => {
        if (!confirmDeleting) {
            setConfirmDeleting(true);
            setTimeout(() => {
                setConfirmDeleting(false);
            }, 3000);
        } else {
            dispatch(deleteAction(id));
            setConfirmDeleting(false);
        }
    };

    return (
        <div className={s.cartItemWrap}>
            <img src={`http://localhost:3333/${image}`} alt="" />
            <div className={s.titleCountBlock}>
                <p>{title}</p>
                <div>
                    <p onClick={() => dispatch(decrAction(id))}>{count <= 1 ? '\u00A0' : "-"} </p>
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

            <p className={s.delFromCart} onClick={deleteItem}>
                {confirmDeleting ? <CiTrash /> : <CiCircleRemove />}
            </p>
        </div>
    );
}
