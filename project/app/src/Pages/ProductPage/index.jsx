import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductIndividual from "../../components/ProductIndividual";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import { useSelector } from "react-redux";
import ProductsContainer from "../../components/ProductsContainer";

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({ status: "loading" });

    const getProduct = (id, callback) => {
        fetch(`http://localhost:3333/products/${id}`)
            .then((res) => res.json())
            .then((json) => callback({ status: "ready", list: json }));
    };

    useEffect(() => {
        getProduct(id, setProduct);
    }, []);

    const products = useSelector(({ products }) => products);
    const relatedProducts = {
        ...products,
        list: product.status !== "loading" && products.list.filter((el) => el.categoryId === product.list[0].categoryId && el.id !== +id).sort(() => Math.random() - 0.5).slice(0, 4),
    };

    console.log(relatedProducts);
    return (
        <Wrapper>
            {product.status === "ready" && (
                <>
                    <PageTitle>{product.list[0].title}</PageTitle>
                    <ProductIndividual product={product.list[0]} />
                    <h2>Related products</h2>
                    {products.status === "loading" ? <p>Loading...</p> : products.status === "error" ? "Error..." : <ProductsContainer products={relatedProducts} />}
                </>
            )}
        </Wrapper>
    );
}
