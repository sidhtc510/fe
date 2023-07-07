import React from "react";
import s from "./s.module.css";

export default function CartItem({
    id,
    title,
    price,
    discont_price,
    image,
    count,
}) {
    return (
        <div className={s.cartItemWrap}>
            <img src={`http://localhost:3333/${image}`} alt="" />

            <div className={s.titleCountBlock}>
                <p>{title}</p>
                <div>
                    <p>-</p>
                    <input type="number" />
                    <p>+</p>
                </div>
            </div>

            <div className={s.priceBlock}>
                <p>Price {price}</p>
                <p>Amount {price*2}</p>
            </div>
        </div>
    );
}
