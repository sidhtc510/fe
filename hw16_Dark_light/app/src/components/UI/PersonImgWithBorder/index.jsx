import React from "react";
import s from './s.module.css'

export default function PersonImgWithBorder({img, className}) {
    return (
        <div className={[s.img_wrap, className].join(" ")}>
            <img src={img} alt="" />
        </div>
    );
}
