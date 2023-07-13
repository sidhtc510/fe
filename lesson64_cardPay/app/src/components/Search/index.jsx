import React, { useEffect, useState } from "react";
import s from "./s.module.css";
import { useDispatch } from "react-redux";
import { search } from "../../store/slice/dataSlice";

export default function Search() {
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="text"
                onChange={(e) => dispatch(search(e.target.value))}
                className={s.input}
            />
        </div>
    );
}
