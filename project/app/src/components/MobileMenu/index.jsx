import React from "react";
import s from "./s.module.css";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineHome } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileMenu({ cartQtn }) {
    return (
        <div className={s.mobileMenu}>
            <Link to="/">
                <HiOutlineHome /> <p>Main</p>
            </Link>
            <Link to="/cart" className={s.cartIconWrap}>
                <p>
                    <HiOutlineShoppingBag />
                    {!cartQtn > 0 || (
                        <p className={s.cartQtnStyle}>{cartQtn}</p>
                    )}
                </p>
                <p>Cart</p>
            </Link>
            <div>
                <RxHamburgerMenu />
                <p>Menu</p>
                {/* <Link to="/products">All products</Link>
                <Link to="/sales">All Sale</Link>
                <Link to="/categories">Categories</Link> */}
            </div>
        </div>
    );
}
