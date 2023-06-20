import React, { useState } from "react";
import { BsLinkedin, BsTwitter, BsFacebook, BsList, BsXLg } from "react-icons/bs";
import logo from "./images/logo.png";
import s from "./s.module.css";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";
import MainWrapper from "../UI/MainWrapper";

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const style_menu = menuIsOpen
    ? `${s.nav_mobile_wrapperACTIVE} ${s.nav_mobile_wrapper}`
    : s.nav_mobile_wrapper;

    return (
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

            <div className={s.buttonMenu} onClick={() => setMenuIsOpen(true)}>
                <BsList />
            </div>

            <div className={style_menu}>
                <nav className={s.nav}>
                    <p
                        className={s.close_modal}
                        onClick={() => setMenuIsOpen(false)}
                    >
                        <BsXLg />
                    </p>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={() => setMenuIsOpen(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/author" onClick={() => setMenuIsOpen(false)}>Author</NavLink>
                        </li>
                        <li>
                            <NavLink to="/companies" onClick={() => setMenuIsOpen(false)}>Companies</NavLink>
                        </li>
                        <li>
                            <NavLink to="/articles" onClick={() => setMenuIsOpen(false)}>Articles</NavLink>
                        </li>
                    </ul>
                    <Button> Order Today </Button>
                </nav>
            </div>
        </MainWrapper>
        //     </div>
        // </header>
    );
}
