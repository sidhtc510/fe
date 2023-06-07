import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import s from "./s.module.css";
import Loader from "../Loader";

export default function ProductsList() {
    const { productsList, status } = useSelector((state) => state.products);

    const showProduct = productsList.filter((el) => el.show === true);

    return (
        <div className={s.productsContainer}>
            {status === "ready" ? (
                showProduct.map((el) => <ProductItem key={el.id} {...el} />)
            ) : status === "error" ? (
                <p>Error</p>
            ) : (
                <Loader />
            )}
        </div>
    );
}
