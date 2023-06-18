import React from "react";
import s from './s.module.css'
export default function CompaniesCard({...props }) {
    return (
        <div className={s.card}>
            <img src={props.src} alt="" />
            <p className={s.title}>{props.title}</p>
            <p className={s.description}>{props.description}</p>
        </div>
    );
}
