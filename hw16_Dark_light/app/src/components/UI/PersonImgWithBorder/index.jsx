import React from "react";
import s from './s.module.css'

export default function PersonImgWithBorder({img}) {
    return (
        <div className={s.img_wrap}>
            <img src={img} alt="" />
        </div>
    );
}
