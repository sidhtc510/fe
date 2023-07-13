import React from "react";
import s from "./s.module.css";
import { useDispatch } from "react-redux";
import { typeOfCardAction } from "../../store/slice/dataSlice";

export default function TypeOfCardSelect() {
    const dispatch = useDispatch();

    const handle = (e) => {
        dispatch(typeOfCardAction(e.target.value));
    };
    return (
        <div>
            <select name="typeOfCard" onChange={handle}>
                <option value="all">all</option>
                <option value="mc">Master Card</option>
                <option value="visa">Visa</option>
            </select>
        </div>
    );
}
