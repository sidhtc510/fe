import React from "react";
import Product from "../Product";
import s from "./s.module.css";

export default function ProductsContainer({ products }) {

    return (
        <div className={s.productsWrapper}>
            {products.list
                .filter(({ show }) => Object.values(show).every((item) => item))
                .map((el) => (
                    <Product key={el.id} {...el} />
                ))}
        </div>
    );
}
