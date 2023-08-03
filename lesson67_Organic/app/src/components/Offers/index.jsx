import React from "react";
import Container from "../UI/Container";
import lp from "./lp.jpg";
import rp from "./rp.jpg";
import s from "./s.module.css";

export default function Offers() {
    return (
        <Container>
            <div className={s.Offers_wrapper}>
                <div>
                    <div className={[s.Offers_fruits, s.Offers_card].join(" ")}>
                        <img src={lp} alt="" />

                        <span>
                            <p>Natural!!!</p>
                            <p>Get Garden Fresh Fruits</p>
                        </span>
                    </div>
                </div>

                <div>
                    <div className={[s.Offers_vegetables, s.Offers_card].join(" ")}>
                        <img src={rp} alt="" />
                        <span>
                            <p>Offer!!</p>
                            <p>Get 10% off on Vegetables</p>
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    );
}
