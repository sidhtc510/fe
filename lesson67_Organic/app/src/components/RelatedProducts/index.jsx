import React from "react";
import Container from "../UI/Container";
import ProductItem from "../ProductItem";
import s from "./s.module.css";
import { useSelector } from "react-redux";

export default function RelatedProducts({ type, currentProductId }) {
    const relatedProducts = useSelector(({ products }) => products.list.filter((el) => el.type === type && el.id !== +currentProductId));
    return (

            <Container>
                <div className={s.productsContainer_wrapper}>
                    {relatedProducts.map((el) => (
                        <ProductItem key={el.id} {...el} />
                    ))}
                </div>
            </Container>
        
    );
}
