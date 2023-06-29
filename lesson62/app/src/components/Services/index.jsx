import React from "react";
import Container from "../UI/Container";
import s from "./s.module.css";

export default function Services() {
    return (
        <Container>
            <h1>Сеансы RitmStyle</h1>
            <div className={s.wrapper}>
                <div className={s.firstBlock}>
                    <p>Стандартный RitmStyle</p>
                </div>
                <div>
                    <p>RitmStyle для пар</p>
                </div>
                <div>
                    <p>RitmStyle с полным погружением под воду</p>
                </div>
                <div>
                    <p>RitmStyle для беременных</p>
                </div>
                <div>
                    <p>RitmStyle + красочная подводная фотосессия</p>
                </div>
            </div>
        </Container>
    );
}
