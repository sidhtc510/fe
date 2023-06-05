import React from "react";
import { Link } from "react-router-dom";
import s from "./s.module.css";
import { useSelector } from "react-redux";

export default function Header() {
    const { cart } = useSelector((state) => state);
    const cartCount = cart.reduce((acc,el)=>acc+el.count,0)
    return (
        <div className={s.header}>
            <p>
                <Link to="/">Main page</Link>
            </p>
            <p>
                <Link to="/cart">Cart <span>{cartCount || ""}</span></Link>
            </p>
        </div>
    );
}
