import React from "react";
import monk from "./2.png";
import auth from "./7.png";
import s from "./s.module.css";

export default function Monkey({ title, author }) {
    return (
        <div className={s.card}>
            <img src={monk} alt="" />
            <div className={s.authorInfo}>
                <p>{title}</p>
                <p>{author}</p>
                <img className={s.avatar} src={auth} alt="" />
            </div>
        </div>
    );
}
