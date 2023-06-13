import React from "react";
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import logo from './images/logo.png'
import s from './s.module.css'

export default function Header() {
    return (
        <div className={s.header_wrapper}>
            <div className={s.logo_wrapper}>
                <img src={logo} alt="" />
                <p>
                    <BsFacebook />
                </p>
                <p>
                    <BsTwitter />
                </p>
                <p>
                    <BsLinkedin />
                </p>
            </div>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Author</li>
                    <li>Companies</li>
                    <li>Articles</li>
                </ul>
                <p>Order Today</p>
            </nav>


        </div>
    );
}
