import React, { useState } from "react";

import ProductItem from "../ProductItem";
import s from "./s.module.css";
import Container from "../UI/Container";
import { useSelector } from "react-redux";
import Filters from "../Filters";

export default function ProductsContainer({ count }) {
    const products = useSelector((state) => (count ? state.products.list.slice(0, count) : state.products.list.filter(({ show }) => Object.values(show).every((item) => item))));

    // console.log(products);

    return (
        <>
            <Container>
                <Filters />
                <div className={s.zagolovki}>
                    <h3>Categories </h3>
                    <h2>Our products</h2>
                </div>
                <div className={s.productsContainer_wrapper}>
                    {products.map((el) => (
                        <ProductItem key={el.id} {...el} />
                    ))}
                </div>
            </Container>
        </>
    );
}
