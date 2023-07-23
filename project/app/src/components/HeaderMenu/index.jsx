import s from "./s.module.css";
import logo from "./logo.png";

import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";

export default function HeaderMenu({ cartQtn }) {
    return (
        <Wrapper>
            <nav className={s.nav}>
                <div>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <Link to="/categories">
                        {" "}
                        <Button className="HeaderMenuButton">Categories</Button>
                    </Link>
                </div>
                <div>
                    <div className={s.links}>
                        <Link to="/">Main Page</Link>
                        <Link to="/products">All products</Link>
                        <Link to="/sales">All Sale</Link>
                    </div>
                    <Link to="/cart">
                        {!cartQtn > 0 || <p className={s.cartQtnStyle}>{cartQtn}</p>}
                        <HiOutlineShoppingBag />
                    </Link>
                </div>
            </nav>
            <nav className={s.mobileHeader}>
                <Link to="/">
                    <img src={logo} alt="" />
                    <p>Sad&Ogorod</p>
                </Link>
            </nav>
        </Wrapper>
    );
}
