import React, { useState } from "react";
import Wrapper from "../Wrapper";
import s from "./s.module.css";
import menuIcon from "./menu_icon.png";
import closeBtn from "./close_btn.png";

export default function Nav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const style_menu = menuIsOpen
        ? `${s.nav_wrapper_ACTIVE} ${s.nav_wrapper}`
        : s.nav_wrapper;

    const buttonIcon = menuIsOpen ? <img src={closeBtn} alt="" /> : <img src={menuIcon} alt="" />;
    return (
        <Wrapper>
            <div className={s.buttonMenu} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                {buttonIcon}
            </div>

            <div className={style_menu}>
                <nav className={s.nav}>
                    <a href="#home">Home</a>
                    <a href="#AboutMe">About me</a>
                    <a href="#skills">Skills</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </div>
        </Wrapper>
    );
}
