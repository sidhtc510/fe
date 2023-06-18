import React from "react";
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import logo from "./images/logo.png";
import s from "./s.module.css";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";
import MainWrapper from "../UI/MainWrapper";

export default function Header() {
    return (
        // <header className={s.header_wrapper}>
        //     <div className={s.flex_wrap}>
        <MainWrapper className={s.header_wrapper}>
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
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/author">Author</NavLink>
                    </li>
                    <li>
                        <NavLink to="/companies">Companies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/articles">Articles</NavLink>
                    </li>
                </ul>
                <Button> Order Today </Button>
            </nav>
        </MainWrapper>
        //     </div>
        // </header>
    );
}
