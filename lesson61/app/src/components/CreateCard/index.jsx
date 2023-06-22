import React from "react";
import img_nft from "./img.png";
import s from './s.module.css'

export default function CreateCard({ title, descr }) {
    return (
        <div className={s.card}>
            <img src={img_nft} alt="" />
            <h3>{title}</h3>
            <p>{descr}</p>
        </div>
    );
}
