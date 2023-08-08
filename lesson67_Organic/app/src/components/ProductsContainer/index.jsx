import React from "react";
// import data from "../../data/data";
import ProductItem from "../ProductItem";
import s from "./s.module.css";
import Container from "../UI/Container";
import { useSelector } from "react-redux";

export default function ProductsContainer() {
    const products = useSelector((state) => state.products);

    return (
        <Container>
            <div className={s.zagolovki}>
                <h3>Categories </h3>
                <h2>Our products</h2>
            </div>
            <div className={s.productsContainer_wrapper}>
                {products.list.map((el) => (
                    <ProductItem key={el.id} {...el} />
                ))}
            </div>
        </Container>
    );
}
