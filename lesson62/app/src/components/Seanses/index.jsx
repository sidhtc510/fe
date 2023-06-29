import React from "react";
import s from "./s.module.css";
import Container from "../UI/Container";
import certificate from "./certificate.png";

export default function Seanses() {
    return (
        <div>
            <Container>
                <h2>Cтоимость сеансов</h2>
                <div className={s.wrapper}>
                    <div className={s.list}>
                        <ul>
                            <li>
                                <div>
                                    <p>RitmStyle с погружением</p>
                                    <p>1000р.</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Абонемент на RitmStyle</p>
                                    <p>5500р.</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>RitmStyle для пар</p>
                                    <p>6000р.</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>RitmStyle для беременных</p>
                                    <p>13500р.</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>RitmStyle + фотосессия</p>
                                    <p>11500р.</p>
                                </div>
                            </li>
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
