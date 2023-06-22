import React from "react";
import Wrapper from "../Wrapper";
import s from "./s.module.css";
export default function Nav() {
    return (
        <Wrapper>
            <nav className={s.nav}>
                <a href="#">Home</a>
                <a href="#">About me</a>
                <a href="#">Skills</a>
                <a href="#">Portfolio</a>
                <a href="#">Contacts</a>
            </nav>
        </Wrapper>
    );
}
