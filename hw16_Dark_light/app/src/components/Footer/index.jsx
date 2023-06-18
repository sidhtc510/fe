import React from "react";
import { BsLinkedin, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import logo from "./images/logo.png";
import s from "./s.module.css";
import MainWrapper from "../UI/MainWrapper";

export default function Footer() {
    
    return (
        <MainWrapper className={s.footer}>

        {/* <footer className={s.footer}> */}
            <div className={s.logo_wrapper}>
                <p className={s.logo}>
                    <img src={logo} alt="" />
                    Pages
                </p>

                <div className={s.iconsWrapper}>
                    <p className={s.icons}>
                        <BsFacebook />
                    </p>
                    <p className={s.icons}>
                        <BsTwitter />
                    </p>
                    <p className={s.icons}>
                        <BsLinkedin />
                    </p>
                    <p className={s.icons}>
                        <BsInstagram />
                    </p>
                </div>
            </div>

            <div className={s.exploreBlock}>
                <h3>Explore</h3>
                <ul>
                    <li>
                        <span>&#183;&#183;&#183;</span>Home
                    </li>
                    <li>
                        <span>&#183;&#183;&#183;</span>About
                    </li>
                    <li>
                        <span>&#183;&#183;&#183;</span>Articles
                    </li>
                    <li>
                        <span>&#183;&#183;&#183;</span>Our Store
                    </li>
                    <li>
                        <span>&#183;&#183;&#183;</span>Contact Us
                    </li>
                </ul>
            </div>
            <div className={s.utilityBlock}>
                <h3>Utility Pages</h3>
                <ul>
                    <li>
                        <span>&#183;&#183;&#183;</span>Style Guide
                    </li>
                    <li>
                        <span>&#183;&#183;&#183;</span>404 Not Found
                    </li>
                    <li>
                        <span>&#183;&#183;&#183;</span>Password Protected
                    </li>
                    <li>
                        <span>&#183;&#183;&#183;</span>Licenses
                    </li>
                    <li>
                        <span>&#183;&#183;&#183;</span>Changelog
                    </li>
                </ul>
            </div>


            <div className={s.KeepInTouchBlock}>
                <h3>Keep In Touch</h3>
                <p>
                    <span>Address: </span> 24A Kingston St, Los Vegas <br/>
                    NC 28202, USA.
                </p>
                <p>
                    <span>Mail: </span> support@pages.com
                </p>
                <p>
                    <span>Phone: </span> (+22) 123 - 4567 - 900
                </p>
            </div>
        </MainWrapper>
        // </footer>
    );
}
