import React from "react";
import Container from "../UI/Container";
import s from "./s.module.css";
import Button from "../UI/Button";
import { IoLocationSharp } from "react-icons/io5";
import { IoAmericanFootball } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";

export default function Contacts() {
    return (
        <div>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5095681556354!2d6.727683076829084!3d49.28568957054087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795a9b19d641f2f%3A0xfea532862a21d437!2sSt.-Avolder-Stra%C3%9Fe%2063%2C%2066740%20Saarlouis!5e0!3m2!1sen!2sde!4v1688034866201!5m2!1sen!2sde"
                            // width="600"
                            // height="450"
                            // style="border:0;"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className={s.contacts}>
                        <div className={s.workClassPool}>
                            <h3>Бассейн WorkClass</h3>
                            <p>
                                <IoLocationSharp />
                                Невский 140
                            </p>
                            <p>
                                <IoAmericanFootball /> м. Спасская
                            </p>
                            <p>
                                <IoCalendarOutline />
                                Запись по договоренности
                            </p>
                            <Button type={"light"}>Записаться на сеанс</Button>
                        </div>
                        <div className={s.gorokhoviyPool}>
                            <h3>Бассейн "На Гороховой"</h3>
                            <p>
                                {" "}
                                <IoLocationSharp />
                                3-й проезд Иванова
                            </p>
                            <p>
                                <IoAmericanFootball /> м. Крестовский остров
                            </p>
                            <p>
                                <IoCalendarOutline />
                                Запись по договоренности
                            </p>
                            <Button type={"light"}>Записаться на сеанс</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
