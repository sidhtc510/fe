import React from "react";
import s from "./s.module.css";

export default function Button({
    component,
    children,
    className,
    type,
    ...props
}) {
    props["className"] = [s.button, className, s[type]].join(" ");

    return component === "button" ? (
        <button {...props}>{children}</button>
    ) : (
        <a {...props}>{children}</a>
    );
}
