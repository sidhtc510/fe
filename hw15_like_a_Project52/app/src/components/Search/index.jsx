import React from "react";
import s from "./s.module.css";
import { productsSearchAction } from "../../store/reducers/productsReducer";
import { useDispatch } from "react-redux";

export default function Search() {
    const dispatch = useDispatch();

    const handle = (e) => {
        dispatch(productsSearchAction(e.target.value));
    };

    return (
        <div className={s.searchWrap}>
            <input
                type="text"
                onChange={handle}
                name="search"
                placeholder="search"
            />
        </div>
    );
}
