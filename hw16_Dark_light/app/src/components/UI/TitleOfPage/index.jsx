import React from "react";
import s from "./s.module.css";

export default function TitleOfPage({ children, className }) {
    return (
        <div className={[s.wrap, className].join(" ")}>
            <p>{children}</p>
            <span></span>
        </div>
    );
}
