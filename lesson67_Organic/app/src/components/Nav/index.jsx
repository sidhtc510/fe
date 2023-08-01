import React from "react";
import logo from "./logo.png";
import s from "./s.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Container from "../UI/Container";

export default function Nav() {
    return (
        <Container>
            <nav className={s.Nav_wrap}>
                <div className={s.Nav_logo_wrap}>
                    <img src={logo} alt="" />
                    <p>Organic</p>
                </div>

                <ul className={s.Nav_ul}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li >
                        <a href="#" style={{ display: "flex", alignItems: "center" }}>
                            Pages <MdOutlineKeyboardArrowDown />
                        </a>
                    </li>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <a href="#">Project</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                </ul>

                <div className={s.Nav_search_cart_wrapper}>
                    <div className={s.Nav_search}>
                        <input type="text" />
                        <p>
                            <HiOutlineSearch />
                        </p>
                    </div>

                    <div className={s.Nav_cart}>
                        <div>
                            <PiShoppingCartSimpleLight />
                        </div>
                        <p>Cart (0)</p>
                    </div>
                </div>
            </nav>
        </Container>
    );
}
