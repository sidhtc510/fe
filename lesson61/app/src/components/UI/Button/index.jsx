import React from "react";
import s from "./s.module.css";

export default function Button({ component, children, className, ...props }) {
    props["className"] = [s.button, className].join(" ");

    return component === "a" ? (
        <button {...props}>{children}</button>
        ) : (
        <a {...props}>{children}</a>
    );
}
