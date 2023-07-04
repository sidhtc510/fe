import React from "react";
import s from "./s.module.css";
import Wrapper from "../Wrapper";

export default function AboutMe() {
    return (
        <div className={s.aboutMe} id="AboutMe">
            <Wrapper>
                <div className={s.wrap}>
                    <h2>About Me</h2>
                    <p>
                        Hi, I'm Hayk – web developer from Yerevan. I'm
                        interested in development and everything connected with
                        it.
                    </p>
                    <p>
                        Ready to implement excellent projects with wonderful
                        people
                    </p>
                </div>
            </Wrapper>
        </div>
    );
}
