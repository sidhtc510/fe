import React from "react";
import Container from "../UI/Container";
import lp from "./lp.jpg";
import rp from "./rp.jpg";
import s from "./s.module.css";

export default function Offers() {
    return (
        <Container>
            <div className={s.Offers_wrapper}>
                <div className={s.Offers_fruits}>
                    <p>Natural!!!</p>
                    <p>Get Garden Fresh Fruits</p>
                </div>

                <div className={s.Offers_vegetables}>
                    <p>Offer!!</p>
                    <p>Get 10% off on Vegetables</p>
                </div>
            </div>
        </Container>
    );
}
