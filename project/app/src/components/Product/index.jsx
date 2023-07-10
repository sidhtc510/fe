import React from "react";
import s from "./s.module.css";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAction } from "../../store/slice/cartSlice";

export default function Product({ id, title, price, discont_price, image }) {
    const dispatch = useDispatch();

    const percent =
        discont_price === null
            ? ""
            : Math.ceil(((price - discont_price) / price) * 100) + "%";

    const addToCart = () => {
        dispatch(addAction({ id }));
    };

    return (
        <div className={s.wrap}>
            <Link to={`/product/${id}`} className={s.productWrapper}>
                <img src={`http://localhost:3333/${image}`} alt="" />
                <div>
                    <div className={s.priceBlock}>
                        <p className={s.price}>
                            {discont_price ?? price}
                            <span>$</span>{" "}
                        </p>
                        <p className={s.oldPrice}>
                            {discont_price !== null ? `${price}$` : ""}
                        </p>
                        <p className={s.sale}>{percent}</p>
                    </div>
                    <p className={s.title}>{title}</p>
                </div>
            </Link>
            <Button className="addToCart" onClick={addToCart}>
                Add To Cart
            </Button>
        </div>
    );
}
