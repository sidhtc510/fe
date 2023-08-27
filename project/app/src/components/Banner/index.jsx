import React from "react";
import s from "./s.module.css";
import banner from "./banner.jpg";

import Button from "../UI/Button";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className={s.wrapper} style={{ backgroundImage: `url(${banner})` }}>
            <div className={s.info}>
                <h2>SALE</h2>
                <h3>New season</h3>
                <Link to="/sales">
                    <Button className="BannerSale">Sale</Button>
                </Link>
            </div>
        </div>
    );
}
