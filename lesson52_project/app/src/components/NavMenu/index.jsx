import React from "react";
import { NavLink } from "react-router-dom";
import s from "./s.module.css";

export default function NavMenu() {
    const classFunction = ({ isActive }) => (isActive ? s.active : "");

    return (
        <nav className={s.nav}>
            <NavLink className={classFunction} to="/">
                Main
            </NavLink>
            <NavLink className={classFunction} to="/categories">
                Categories
            </NavLink>
            <NavLink className={classFunction} to="/products">
                Products
            </NavLink>
            <NavLink className={classFunction} to="/cart">
                Cart
            </NavLink>
        </nav>
    );
}
