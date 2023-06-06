import React from "react";
import s from './s.module.css'
export default function Loader() {
    return (
        <div className={s.loader}>
            <img src="./loader.gif" alt="" />
        </div>
    );
}
