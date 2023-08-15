import React from "react";
import Product from "../Product";
import s from "./s.module.css";

export default function ProductsContainer({ products, dontUseShowFilter }) {
const processedProducts = dontUseShowFilter === undefined ? products.list
.filter(({ show }) => Object.values(show).every((item) => item)) : products.list

    return (
        <div className={s.productsWrapper}>
            {processedProducts
                .map((el) => (
                    <Product key={el.id} {...el} />
                ))}
        </div>
    );
}
