import React, { useEffect, useState } from "react";
import s from "./s.module.css";
import { useDispatch } from "react-redux";
import { changeSelectAction } from "../../store/slices/productsSlice";

export default function ProductsItem({ id, title, price, new_price, mark, type }) {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        dispatch(changeSelectAction({isChecked, id}));
    }, [isChecked]);

    return (
        
        <label htmlFor={id} className={s.ProductsItem__itemWrapper}>

            <input id={id} type="checkbox" defaultChecked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            <p>{id}</p>
            <p>{title}</p>
            <p>{price}</p>
        </label>
    );
}
