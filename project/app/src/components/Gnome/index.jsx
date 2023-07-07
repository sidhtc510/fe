import React from "react";
import s from "./s.module.css";
import img from "./3.png";
import Button from "../UI/Button";

export default function Gnome() {
    return (
        <div className={s.wrap}>
            <img src={img} alt="" />
            <div className={s.formBlock}>
                <h2>5% off</h2>
                <h3>on the first order</h3>
                <form>
                    <input type="text" name="phone" placeholder="Enter your phone number"/>
                    <Button className={"getDiscount"}>Get a discount</Button>
                </form>
            </div>
        </div>
    );
}
