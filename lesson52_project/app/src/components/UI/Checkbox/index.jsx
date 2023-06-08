import React from "react";
import s from "./s.module.css";

export default function Checkbox({ label, size, ...props }) {
    return (
        <div className={s.container}>
            <p>{label}</p>
            <input className={[s.checkbox, s[size]].join(" ")} type="checkbox" {...props} />
        </div>
    );
}
