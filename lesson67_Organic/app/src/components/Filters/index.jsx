import React, { useEffect, useState } from "react";
import s from "./s.module.css";
import { useDispatch } from "react-redux";
import { filterPriceAction } from "../../store/slices/productsSlice";
export default function Filters() {
    const dispatch = useDispatch();
    const [price, setPrice] = useState({
        min: 0,
        max: Infinity,
    });

    useEffect(() => {
        dispatch(filterPriceAction(price));
    }, [dispatch, price]);

    // console.log("Filters", price);

    return (
        <div className={s.form}>
            <input type="number" placeholder="min" onChange={({ target }) => setPrice({ ...price, min: +target.value })} value={price.min || ""} min={0} />

            <input
                type="number"
                placeholder="max"
                onChange={({ target }) => setPrice({ ...price, max: +target.value || Infinity })}
                value={price.max === Infinity ? "" : price.max}
            />
            <label className={s.label} htmlFor="chbx">
                <p>Sale</p>
                <input type="checkbox" id="chbx" onChange={e=>console.log(e.target.checked)}/>
            </label>
        </div>
    );
}
