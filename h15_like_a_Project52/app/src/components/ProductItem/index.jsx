import React from "react";
import s from "./s.module.css";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../store/reducers/cartReducer";

export default function ProductItem({
    id,
    title,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
}) {
    const dispatch = useDispatch();
    const handler = () => {
        dispatch(addToCartAction(id));
    };
    return (
        <div className={s.productItem}>
            <img src={thumbnail} alt="" />

            <div className={s.productInfo}>
                <div className={s.title}>{title}</div>
                <div className={s.prices}>
                    <div className={s.oldPrice}>{price} $</div>
                    <div className={s.actualPrice}>
                        {" "}
                        {(price - (price * discountPercentage) / 100).toFixed(
                            2
                        )}{" "}
                        ${" "}
                    </div>
                </div>
                <button onClick={handler}>Add to cart</button>
            </div>
        </div>
    );
}
