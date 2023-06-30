import React from "react";
import Container from "../UI/Container";
import s from "./s.module.css";
import { useSelector } from "react-redux";

export default function Services() {
    const services = useSelector((state) => state.services.list);

    return (
        <Container>
            <h1>Сеансы RitmStyle</h1>
            <div className={s.wrapper}>
                {services.map((el) => (
                    <div style={{ backgroundImage: `url(${el.image})` }}>
                        <p>{el.title}</p>
                    </div>
                ))}
            </div>
        </Container>
    );
}
