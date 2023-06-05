import React from "react";
import s from "./s.module.css";

export default function ProductItem({
    id,
    title,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
}) {
    return (
        <div className={s.productItem}>
            <img src={thumbnail} alt="" />
            <div>
                <div className={s.title}>{title}</div>
                {(price - (price * discountPercentage) / 100).toFixed(2)} $
                <span className={s.oldPrice}>{price} $</span>
            </div>
        </div>
    );
}
