import React from "react";
import s from "./s.module.css";
import Container from "../UI/Container";

export default function Main() {
    return (
        <Container>
            <div className={s.image}>
                <p>Укрепление здоровья</p>
                <h2>Акватерапия 
                   <br /> RitmStyle</h2>
            </div>
        </Container>
    );
}
