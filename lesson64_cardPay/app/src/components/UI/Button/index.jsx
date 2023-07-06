import React from "react";
import s from "./s.module.css";

export default function Button({ className, children }) {
    return (
        <button className={[s.btn, s[className]].join(" ")}>{children}</button>
    );
}
