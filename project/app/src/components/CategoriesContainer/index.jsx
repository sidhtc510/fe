import s from "./s.module.css";
import React from "react";
import CategoryItem from "../CategoryItem";

export default function CategoriesContainer({ categories }) {
    
    return (
        <div className={s.wrapper}>
            {categories.map((el) => (
                <CategoryItem key={el.id} {...el} />
            ))}
        </div>
    );
}
