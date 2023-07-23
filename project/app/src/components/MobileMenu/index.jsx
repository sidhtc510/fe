import React, { useState } from "react";
import s from "./s.module.css";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineHome } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenuLinks from "./MobileMenuLinks";

export default function MobileMenu({ cartQtn }) {
    const [mobileMenuLinks, setMobileMenuLinks] = useState(false);

    return (
        <>
            {mobileMenuLinks && <MobileMenuLinks setMobileMenuLinks={setMobileMenuLinks}/>}

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
                <div onClick={() => setMobileMenuLinks(true)}>
                    <RxHamburgerMenu />
                    <p>Menu</p>
                </div>
            </div>
        </>
    );
}
