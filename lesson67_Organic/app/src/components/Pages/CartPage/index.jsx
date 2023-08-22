import React from "react";
import s from "./s.module.css";
import Banner from "../../UI/Banner";
import img from "./cartImg.jpg";
import CartContainer from "../../CartContainer";

export default function CartPage() {
    return (
        <div>
            <Banner img={img}>Cart</Banner>
            <CartContainer />
        </div>
    );
}
