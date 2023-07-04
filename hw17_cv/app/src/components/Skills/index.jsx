import React from "react";
import s from "./s.module.css";
import starBlack from "./images/star_black.png";
import star from "./images/star.png";
import i1 from "./images/1.png";
import i2 from "./images/2.png";
import i3 from "./images/3.png";
import i4 from "./images/4.png";
import Wrapper from "../Wrapper";

export default function Skills() {
    return (
        <Wrapper>
            <div className={s.skillsWrapper} id="skills">
                <h2>Skills</h2>
                <p>I work in such technologies as</p>
                <div className={s.technologies}>
                    <div className={s.tech}>
                        <img src={i1} alt="" />
                        <p>HTML5</p>
                        <div className="stars">
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>

                    <div className={s.tech}>
                        <img src={i2} alt="" />
                        <p>CSS3</p>
                        <div className="stars">
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>

                    <div className={s.tech}>
                        <img src={i3} alt="" />
                        <p>JavaScript</p>
                        <div className="stars">
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>

                    <div className={s.tech}>
                        <img src={i4} alt="" />
                        <p>React</p>
                        <div className="stars">
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={starBlack} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
