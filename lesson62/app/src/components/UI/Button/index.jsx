import React from "react";
import s from "./s.module.css";

export default function Button({ children, type, className, ...props }) {

    props.className = [s.button, className, s[type]].join(" ");

    return <button {...props}>{children}</button>;
}
