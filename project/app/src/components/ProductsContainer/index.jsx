import React from "react";
import Product from "../Product";
import s from "./s.module.css";
export default function ProductsContainer({ products }) {

    return (
        <div className={s.productsWrapper}>
            {" "}
            {products.list.map((el) => (
                <Product key={el.id} {...el} />
            ))}
        </div>
    );
}
