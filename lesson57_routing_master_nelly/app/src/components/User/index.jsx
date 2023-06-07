import React from "react";
import s from "./s.module.css";

export default function User({ name, role, avatar }) {
    return (
        <div className={s.card}>
            <img src={avatar} alt="" />
            <p>
                ***{name} - {role}***
            </p>
        </div>
    );
}
