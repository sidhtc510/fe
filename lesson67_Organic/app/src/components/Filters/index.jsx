import React, { useEffect, useState } from "react";
import s from "./s.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterPriceAction, filterDiscountAction, filterMarkAction, filterCategoryAction, filterResetAction } from "../../store/slices/productsSlice";
export default function Filters() {
    const dispatch = useDispatch();

    const [price, setPrice] = useState({
        min: 0,
        max: Infinity,
    });
    const [chbxState, setChbxState] = useState(false);
    const [mark, setMark] = useState(-1);
    const [category, setCategory] = useState("-1");

    useEffect(() => {
        dispatch(filterPriceAction(price));
    }, [dispatch, price]);

    useEffect(() => {
        dispatch(filterDiscountAction(chbxState));
    }, [dispatch, chbxState]);

    useEffect(() => {
        dispatch(filterMarkAction(mark));
    }, [dispatch, mark]);

    useEffect(() => {
        dispatch(filterCategoryAction(category));
    }, [dispatch, category]);

    const clearInputs = () => {
        setPrice({
            min: 0,
            max: Infinity,
        });
        setChbxState(false);
        setMark(-1);
        setCategory("-1");
        dispatch(filterResetAction(true));
    };

    const categories = useSelector(({ products }) => products.list.map(({ type }) => type)).filter((type, index, arr) => arr.indexOf(type) === index); // выбрать уникальные значения

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
                <input type="checkbox" id="chbx" checked={chbxState} onChange={(e) => setChbxState(e.target.checked)} />
            </label>

            <label>
                <p>Rating</p>
                <select value={mark} onChange={(e) => setMark(e.target.value)}>
                    <option value={-1}>All</option>
                    {[...Array(5)].map((_, index) => (
                        <option key={index} value={index + 1}>
                            {index + 1}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                <p>Categories</p>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value={-1}>All</option>
                    {categories.map((el) => (
                        <option key={el} value={el}>
                            {el}
                        </option>
                    ))}
                </select>
            </label>

            <button onClick={clearInputs}>Reset Filters </button>
        </div>
    );
}
