import React from "react";
import s from './s.module.css'
export default function Nav() {
    return (
        <nav className={s.nav}>
            <a href="#">Home</a>
            <a href="#">About me</a>
            <a href="#">Skills</a>
            <a href="#">Portfolio</a>
            <a href="#">Contacts</a>
        </nav>
    );
}
