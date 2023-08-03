import React from "react";
import data from "../../data/data";
import ProductItem from "../ProductItem";
import s from "./s.module.css";
import Container from "../UI/Container";

export default function ProductsContainer() {
    return (
        <Container>
            <h2>Our products</h2>
            <div className={s.productsContainer_wrapper}>
                {data.map((el) => (
                    <ProductItem key={el.id} {...el} />
                ))}
            </div>
        </Container>
    );
}
