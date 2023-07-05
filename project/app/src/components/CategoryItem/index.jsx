import React from "react";
import s from "./s.module.css";
import { Link } from "react-router-dom";

export default function CategoryItem({ id, title, image }) {
    return (
        <div className={s.catWrap}>
            <Link to={`/categories/${id}`}>
                <img src={`http://localhost:3333/${image}`} alt="" />
                <p>{title}</p>
            </Link>
        </div>
    );
}
