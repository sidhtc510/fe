import React, { useEffect, useState } from "react";
import s from "./s.module.css";
import { useDispatch } from "react-redux";
import { changeSelectAction } from "../../store/slices/productsSlice";

export default function ProductsItem({ id, title, price, new_price, mark, type, isChecked }) {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(changeSelectAction({id}));
    // }, [isChecked]);

    return (
        <label htmlFor={id} className={s.ProductsItem__itemWrapper}>
            <input id={id} type="checkbox" defaultChecked={isChecked} onChange={({target})=>dispatch(changeSelectAction(  {id, isChecked:target.checked}))} />
            <p>{title}</p>
            <p>{price}</p>
        </label>
    );
}
