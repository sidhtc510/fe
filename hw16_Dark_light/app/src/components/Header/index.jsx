import React from "react";
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import logo from "./images/logo.png";
import s from "./s.module.css";
import Button from "../UI/Button";

export default function Header() {
    return (
        <header className={s.header_wrapper}>
            <div className={s.logo_wrapper}>
                <p className={s.logo}>
                    <img src={logo} alt="" />
                    Pages
                </p>
                <p className={s.icons}>
                    <BsFacebook />
                </p>
                <p className={s.icons}>
                    <BsTwitter />
                </p>
                <p className={s.icons}>
                    <BsLinkedin />
                </p>
            </div>

            <nav className={s.nav}>
                <ul>
                    <li>Home</li>
                    <li>Author</li>
                    <li>Companies</li>
                    <li>Articles</li>
                </ul>
                <Button> Order Today </Button>
            </nav>
        </header>
    );
}
