import s from "./s.module.css";

import React from "react";
import { addAction } from "../../store/slice/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Button from "../UI/Button";

export default function ProductIndividual({ product }) {
    const { id, title, price, discont_price, image, description } = product;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addAction({ id }));
        toast("product in cart");
    };

    const percent = discont_price === null ? "" : Math.ceil(((price - discont_price) / price) * 100) + "%";

    return (
        <div className={s.productWrap}>
            <img src={`http://localhost:3333/${image}`} alt="" />
            <div className={s.controlBlock}>
                <div className={s.priceBlock}>
                    <p className={s.price}>
                        {discont_price ?? price}
                        <span>$</span>{" "}
                    </p>
                    <p className={s.oldPrice}>{discont_price !== null ? `${price}$` : ""}</p>
                    <p className={s.sale}>{percent}</p>
                </div>
                <Button className="greenBtn" onClick={addToCart}>
                    To Cart
                </Button>
                <p className={s.description}>
                    <p>Description</p>
                    <p>{description}</p>
                </p>
            </div>
        </div>
    );
}
