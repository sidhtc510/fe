import React from "react";
import s from "./s.module.css";

export default function TitleOfPage({ children }) {
    return (
        <div className={s.wrap}>
            <p>{children}</p>
            <span></span>
        </div>
    );
}
