import s from "./s.module.css";

import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

import Wrapper from "../UI/Wrapper";

export default function Footer() {
    return (
        <footer>
            <Wrapper>
                <div className={s.contacts}>
                    <div className={s.contact}>
                        <p>Contact</p>
                        <p>
                            <a href="tel:+499999999999">+49 999 999 99 99</a>
                        </p>
                        <span>
                            <p>
                                <AiOutlineInstagram />
                                Instagram
                            </p>
                            <p>
                                <AiOutlineWhatsApp />
                                WhatsApp
                            </p>
                        </span>
                    </div>

                    <div className={s.address}>
                        <p>Address</p>
                        <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                        <p>Working Hours:</p>
                        <p>24 hours a day</p>
                    </div>
                    <div className={s.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7320.623009012905!2d13.368522409825365!3d52.50808942673097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cecff94831%3A0x9f39bce1f6ad5524!2sMall%20of%20Berlin!5e0!3m2!1sen!2sde!4v1688501585528!5m2!1sen!2sde"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </Wrapper>
        </footer>
    );
}
