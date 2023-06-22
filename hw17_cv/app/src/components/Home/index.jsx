import React from "react";
import hi from "./images/hi.png";
import s from "./s.module.css";
import Wrapper from "../Wrapper";

export default function Home() {
    return (
        <Wrapper>
            <div className={s.home}>
                <div className={s.info}>
                    <p className={s.name}>
                        Inants
                        <br />
                        Hayk
                    </p>
                    <p className={s.whoAmI}>
                        web developer
                        <br />
                        28 years old, Yerevan
                    </p>
                    <p className={s.language}>RUS | ENG</p>
                </div>
                <img src={hi} alt="" />
            </div>
        </Wrapper>
    );
}
