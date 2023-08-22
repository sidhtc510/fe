import React from "react";
// import img from "./img.jpg";
import s from "./style.module.css";

export default function Banner({ children, img }) {
    const styleImg = {
        background: `url(${img})`,
    };
    return (
        <div style={styleImg} className={s.Banner_wrapper}>
            <h2>{children}</h2>
        </div>
    );
}
