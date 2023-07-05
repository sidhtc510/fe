import React from "react";
import s from "./s.module.css";
import Button from "../UI/Button";

export default function Product({id, title, price, discont_price, image}) {

    return (
        <div className={s.productWrapper}>
            <img src={`http://localhost:3333/${image}`} alt="" />
            <div className={s.priceBlock}>
                <p className={s.price}>{discont_price}<span>$</span> </p>
                <p className={s.oldPrice}>{price}<span>$</span> </p>
                <p className={s.sale}>-7%</p>
            </div>
            <p className={s.title}>{title}</p>

           <Button className="addToCart" >Add To Cart</Button>
        </div>
    );
}
