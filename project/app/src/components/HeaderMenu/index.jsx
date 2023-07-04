import React from "react";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";
import s from "./s.module.css";
import logo from "./logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function HeaderMenu() {
    return (
        <Wrapper>
            <nav className={s.nav}>
                <div>
                    <img src={logo} alt="" />
                    <Button className="HeaderMenuButton">
                        <Link to="/catalog">Catalog</Link>
                    </Button>
                </div>
                <div>
                    <div className={s.links}>
                        <Link to="/">Main Page</Link>
                        <Link to="/products">All products</Link>
                        <Link to="/sales">All Sale</Link>
                    </div>
                    <HiOutlineShoppingBag />
                </div>
            </nav>
        </Wrapper>
    );
}
