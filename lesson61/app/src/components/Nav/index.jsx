import React from "react";
import s from "./s.module.css";
import Container from "../UI/Container";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    return (
        // <nav className={s.nav_wrapper}>
        <Container className={s.nav_wrapper}>
            <div className={s.logo_menu_wrapper}>
                <a href="#" className={s.logo}>
                    Sapphire
                </a>
                <div className={s.menu}>
                    <a href="">Explore</a>
                    <a href="">Marketplace</a>
                    <a href="">Artist</a>
                    <a href="">Collection</a>
                </div>
            </div>
            <div className={s.search_signIn_wrapper}>
                <div className={s.search_wrap}>
                    <input type="text" placeholder="search" />
                    <p className={s.input_search_icon}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </p>
                </div>
                <Button component={"button"}> Sign In</Button>
                {/* <button>Sign In</button> */}
            </div>
        </Container>
        // </nav>
    );
}
