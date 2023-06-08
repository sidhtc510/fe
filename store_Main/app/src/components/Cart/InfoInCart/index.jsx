import React from "react";
import s from "./style.module.css";

export default function InfoInCart({ goodsInTheCart }) {
    
    const totalAmount = goodsInTheCart.reduce(
        (acc, el) => acc + el.count * el.price,
        0
    );

    return (
        <div className={s.infoWrapper}>
            <h2>Information</h2>
            <p>Total Amount: {totalAmount}</p>
        </div>
    );
}
