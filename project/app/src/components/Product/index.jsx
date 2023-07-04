import React from "react";
import s from "./s.module.css";
import img from "./1.png";
import Button from "../UI/Button";

export default function Product({}) {

    return (
        <div className={s.productWrapper}>
            <img src={img} alt="" />
            <div className={s.priceBlock}>
                <p className={s.price}>199<span>$</span> </p>
                <p className={s.oldPrice}>250<span>$</span> </p>
                <p className={s.sale}>-7%</p>
            </div>
            <p className={s.title}>title</p>

           <Button className="addToCart" >Add To Cart</Button>
        </div>
    );
}
