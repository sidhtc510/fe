import React, { useRef } from "react";
import logo from "./logo.png";
import s from "./s.module.css";
import Container from "../UI/Container";
import Button from "../UI/Button";
import { FaBars } from "react-icons/fa";

export default function Nav() {
    const linksElem = useRef();

    const navBtnHandler = () => {
        const target = linksElem.current;
        target.classList.toggle(s.active);
    };

    return (
        <nav>
            <Container className={s.nav}>
                <img src={logo} alt="" />

                <div ref={linksElem} className={s.menu}>
                    <p className={s.menu_item}>Main</p>
                    <p className={s.menu_item}>Seans</p>
                    <p className={s.menu_item}>Review</p>
                    <p className={s.menu_item}>Contacts</p>
                    <p className={s.menu_item}>News</p>
                    <p className={s.menu_item}>About me</p>
                    <p className={s.menu_item}>Blog</p>
                    <Button type={"dark"}>Записаться на сеанс</Button>
                </div>

                <Button
                    onClick={() => navBtnHandler()}
                    type={"dark"}
                    className={s.nav_btn}
                >
                    {" "}
                    <FaBars />{" "}
                </Button>
            </Container>
        </nav>
    );
}
