import React from "react";
import s from "./s.module.css";

export default function Card({ id, title, price, delItem }) {
    return (
        <div className={s.wrap}>
            <p className={s.id}>{id}</p>
            <p className={s.title}>{title}</p>
            <p className={s.price}>{price} $</p>
            <button onClick={() => delItem(id)}>Delete</button>
        </div>
    );
}
