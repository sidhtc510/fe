import React from "react";
import { FiFilter } from "react-icons/fi";
import s from "./s.module.css";


export default function MobileFilterButton() {
    return (
        <div className={s.buttonWrap}>
            <FiFilter />
        </div>
    );
}
