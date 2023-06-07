import React from "react";
import s from "../style.module.css";
import { useDispatch } from "react-redux";
import {
    decrementInCartAction,
    incrementInCartAction,
    deleteFromCartAction,
} from "../../../store/reducers/cartReducer";

export default function ProductInCart({ id, product, price, image, count }) {
    const defaultImg = !image ? "./images/noImage.webp" : "./images/" + image;

    const dispatch = useDispatch();

    return (
        <div className={[s.product, "productInCart"].join(" ")}>
            <div>
                <button
                    className="closeBtn"
                    onClick={() => dispatch(deleteFromCartAction(id))}
                >
                    X
                </button>
                <h2>{product}</h2>
            </div>
            <div>
                <img src={defaultImg} />
            </div>
            <span className={s.priceWrap}>
                <p>Price</p>
                <h3>{price}$</h3>
            </span>
            <div>
                <button onClick={() => dispatch(decrementInCartAction(id))}>
                    -
                </button>
                <p>{count}</p>
                <button onClick={() => dispatch(incrementInCartAction(id))}>
                    +
                </button>
            </div>
            <span className={s.amountWrap}>
                <p>Amount</p>
                <h3>{price * count}$</h3>
            </span>
        </div>
    );
}
