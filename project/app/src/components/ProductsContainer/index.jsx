import s from "./s.module.css";

import React from "react";
import Product from "../Product";

export default function ProductsContainer({ products }) {
    const processedProducts = products.list.filter(({ show }) => Object.values(show).every((item) => item));

    return products.status === "loading" ? (
        "LOADING..."
    ) : (
        <div className={s.productsWrapper}>
            {processedProducts.map((el) => (
                <Product key={el.id} {...el} />
            ))}
        </div>
    );
}
