import React from "react";
import s from './s.module.css'

export default function MainWrapper({ children, color_main, ...props }) {

    return (
        <div className={s.wrapper} style={{backgroundColor:color_main}}>
            <div className={[s.max_size, props.className].join(" ")}>{children}</div>
        </div>
    );
}
