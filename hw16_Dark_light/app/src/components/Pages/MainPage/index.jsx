import React from "react";
import s from "./s.module.css";
import Button from "../../UI/Button";
import rightImage from "./images/rm.png";
import MainWrapper from "../../UI/MainWrapper";

export default function MainPage() {
    return (
        <MainWrapper className={s.main_container_wrapper}>
            <div className={s.info_block}>
                <p className={s.text_welcome_page}>
                    <span></span>Welcome to Pages!!!
                </p>
                <h2>Your Books From</h2>
                <h2>The Best Writer.</h2>
                <span className={s.text_we_belive}>
                    <p>
                        We believe that reading books are essential to a healthy
                        culture.
                    </p>
                    <p>They’re where authors can connect with readers.</p>
                </span>
                <div className={s.button_group}>
                    <Button>Order Today </Button>
                    <Button className={s.clearBtn}> Read Free Demo</Button>
                </div>
                <div className={s.achievements}>
                    <p>
                        <span>&#183;</span>
                        Pages:
                        <p>250pages</p>
                    </p>
                    <p>
                        <span>&#183;</span>
                        Length:
                        <p>10 Hours</p>
                    </p>
                    <p>
                        <span>&#183;</span>
                        Rating:
                        <p>4.5/5 (305 ratings)</p>
                    </p>
                </div>
            </div>

            <div className={s.image_block}>
                <img src={rightImage} alt="" />
            </div>
        </MainWrapper>
    );
}
