import React from "react";
import s from "./s.module.css";

export default function Button({ className, children, ...props }) {
    return (
        <button {...props} className={[s.btn, s[className]].join(" ")}>{children}</button>
    );
}
