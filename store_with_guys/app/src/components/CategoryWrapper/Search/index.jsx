import React from "react";
import { useDispatch } from "react-redux";
import { searchProductsAction } from "../../../store/reducers/searchProductsReducer";
import s from './s.module.css'

export default function Search() {
    const dispatch = useDispatch()
    const searchHandler = ({ target }) => {
        dispatch(searchProductsAction(target.value));
    };

    return (
        <div className={s.searchWrap}>
            <input type="text" placeholder="Search" onChange={searchHandler} />
        </div>
    );
}
