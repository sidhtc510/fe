import React from "react";
import s from "./s.module.css";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";

export default function MobileMenuLinks({ setMobileMenuLinks }) {
    return (
        <div className={s.background_menuLinks}>
            <p
                className={s.closeMenu}
                onClick={() => setMobileMenuLinks(false)}
            >
                <VscClose />
            </p>
            <div className={s.wrap_mobileMenuLinks}>
                <Link onClick={() => setMobileMenuLinks(false)} to="/">
                    Main
                </Link>
                <Link onClick={() => setMobileMenuLinks(false)} to="/products">
                    All products
                </Link>
                <Link onClick={() => setMobileMenuLinks(false)} to="/sales">
                    All Sale
                </Link>
                <Link
                    onClick={() => setMobileMenuLinks(false)}
                    to="/categories"
                >
                    Categories
                </Link>{" "}
            </div>
        </div>
    );
}
