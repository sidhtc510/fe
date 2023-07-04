import React from "react";
import s from "./s.module.css";


export default function Wrapper({children}) {
    return <div className={s.wrapper}>
        {children}
    </div>;
}
