import React from "react";

export default function CartItem({
    id,
    title,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    count,
}) {
    return (
        <div>
            <img src={thumbnail} alt="" />
            {title}
            {price}
            <button>-</button>
            <input type="number" />
            <button>+</button>
            {price * count}
        </div>
    );
}
