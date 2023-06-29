import React from "react";
import s from "./s.module.css";

export default function NewsItem({ id, title, img, date }) {
    return (
        <div className={s.item} style={{backgroundImage:`url(${img})` }}>
            <p>{date}</p>
            <p>{title}</p>
        </div>
    );
}
