import React from "react";
import s from "./s.module.css";

export default function BookForSale({ ...props }) {
    return (
        <div className={s.wrap}>
            <img src={props.src} alt="" />
            <div className={s.info_block}>
                <p className={s.title}>{props.title}</p>
                <p className={s.price}>{props.price}</p>
                <p className={s.info}>
                    As the book contains theoretical content as well as solved
                    questions.
                </p>
                <p className={s.text_printedBook}>
                    <span>&#183;</span>Printed Book
                </p>
            </div>
        </div>
    );
}
