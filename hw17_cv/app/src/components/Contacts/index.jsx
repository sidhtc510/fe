import React from "react";
import s from "./s.module.css";
import Wrapper from "../Wrapper";
import i1 from "./images/1.png";
import i2 from "./images/2.png";
import i3 from "./images/3.png";
import i4 from "./images/4.png";

export default function Contacts() {
    return (
        <div className={s.contacts} id="contacts">
            <Wrapper>
                <h2>Contacts</h2>
                <p>
                    Want to know more or just chat? <br />
                    You are welcome!
                </p>
                <button>Send Message</button>
                <div className={s.pictograms}>
                    <img src={i1} alt="" />
                    <img src={i2} alt="" />
                    <img src={i3} alt="" />
                    <img src={i4} alt="" />
                </div>
                <p>
                    Like me on <br /> LinkedIn, Instagram, Behance, Dribble
                </p>
            </Wrapper>
        </div>
    );
}
