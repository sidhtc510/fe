import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem";
import s from "./s.module.css";

export default function CartList() {
    const { cart, products } = useSelector((state) => state);

    const result = cart.map(item => {
        const compare= products.productsList.find(el=> el.id === item.id)
        return {...compare, ...item}
    })
 console.log(result);
    return (
        <div className={s.cartWrapper}>
            {result.map((el) => (
                <CartItem key={el.id} {...el} />
            ))}
        </div>
    );
}
