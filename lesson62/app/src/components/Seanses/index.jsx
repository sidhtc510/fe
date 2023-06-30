import React from "react";
import s from "./s.module.css";
import Container from "../UI/Container";
import certificate from "./certificate.png";
import { useSelector } from "react-redux";

export default function Seanses() {
    const seanses = useSelector((state) => state.seanses.list);
    return (
        <div>
            <Container>
                <h2>Cтоимость сеансов</h2>
                <div className={s.wrapper}>
                    <div className={s.list}>
                        <ul>
                            {seanses.map((el) => (
                                <li>
                                    <div>
                                        <p>{el.title}</p>
                                        <p>{el.price}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={s.img_wr}>
                        <img src={certificate} alt="" />
                        <p>Подарочный сертификат </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
