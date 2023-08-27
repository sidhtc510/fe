import s from "./s.module.css";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAction } from "../../store/slice/cartSlice";
import { toast } from "react-toastify";

import Button from "../UI/Button";

export default function Product({ id, title, price, discont_price, image }) {
    const dispatch = useDispatch();
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    const percent = discont_price === null ? "" : Math.ceil(((price - discont_price) / price) * 100) + "%";

    const addToCart = () => {
        dispatch(addAction({ id }));
        toast("product in cart");
    };

    return (
        <div className={s.wrap} ref={ref}>
            {!inView ? (
                <div className={s.wrap__sceleton}></div>
            ) : (
                <>
                    <Link to={`/product/${id}`} className={s.productWrapper}>
                        <img src={`http://localhost:3333/${image}`} alt="" />
                        <div>
                            <div className={s.priceBlock}>
                                <p className={s.price}>
                                    {(discont_price ?? price).toFixed(2)}
                                    <span>$</span>{" "}
                                </p>
                                <p className={s.oldPrice}>{discont_price !== null ? `${price.toFixed(2)}$` : ""}</p>
                                <p className={s.sale}>{percent}</p>
                            </div>
                            <p className={s.title}>{title}</p>
                        </div>
                    </Link>
                    <Button className="addToCart" onClick={addToCart}>
                        Add To Cart
                    </Button>
                </>
            )}
        </div>
    );
}
