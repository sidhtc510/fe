import React from "react";
import { Link } from "react-router-dom";
import s from "./s.module.css";

export default function Header() {
    return (
        <div className={s.header}>
            <p>
                <Link to="/">Main page</Link>
            </p>
            <p>
                <Link to="/cart">Cart</Link>
            </p>
        </div>
    );
}
