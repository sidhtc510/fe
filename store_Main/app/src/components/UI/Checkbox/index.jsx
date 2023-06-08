import React from "react";
import s from "./s.module.css";

export default function Checkbox({ label, ...props }) {
    return (
        <div className={s.container}>
            <p>{label}</p>
            <input className={s.checkbox} type="checkbox" {...props} />
        </div>
    );
}
