import React from "react";
import s from "./s.module.css";

export default function Wrapper({ darkTheme, className, ...props }) {
    darkTheme = darkTheme ? s["active"] : ""
    props["className"] = [s.wrap, className, darkTheme].join(" ");
    return <div {...props}></div>;
}
