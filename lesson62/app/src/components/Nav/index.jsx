import React from "react";
import logo from "./logo.png";
import s from "./s.module.css";
import Container from "../UI/Container";
export default function Nav() {
    return (
        <nav>
            <Container className={s.nav}>
                <img src={logo} alt="" />

                <div className={s.menu}>
                    <p className={s.menu_item}>Main</p>
                    <p className={s.menu_item}>Seans</p>
                    <p className={s.menu_item}>Review</p>
                    <p className={s.menu_item}>Contacts</p>
                    <p className={s.menu_item}>News</p>
                    <p className={s.menu_item}>About me</p>
                    <p className={s.menu_item}>Blog</p>
                </div>

                <button className={s.button}>Записаться на сеанс</button>
            </Container>
        </nav>
    );
}
