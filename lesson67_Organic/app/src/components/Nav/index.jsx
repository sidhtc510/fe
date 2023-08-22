import logo from "./logo.png";
import s from "./s.module.css";
import { Context } from "../../context";

import React, { useContext } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Container from "../UI/Container";
import Checkbox from "../UI/Checkbox";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function Nav() {
    const { darkMode, changeDarkMode } = useContext(Context);
    
    const countOfProducts = useCart().reduce((acc, el) => acc + el.count, 0);



    return (
        <Container>
            <nav className={s.Nav_wrap}>
                <div className={s.Nav_logo_wrap}>
                    <img src={logo} alt="" />
                    <p>Organic</p>
                </div>

                <ul className={s.Nav_ul}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
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

                    <Link to="/cart" className={s.Nav_cart}>
                        <div>
                            <PiShoppingCartSimpleLight />
                        </div>
                        <p>Cart ({countOfProducts})</p>
                    </Link>
                    <Checkbox checked={darkMode} onChange={changeDarkMode} label={darkMode ? "Light" : "Dark"} />
                </div>
            </nav>
        </Container>
    );
}
