import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductIndividual from "../../components/ProductIndividual";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";

export default function ProductPage() {

    const { id } = useParams();
    const [product, setProduct] = useState({status:"loading"});

    const getProduct = (id, callback) => {
        fetch(`http://localhost:3333/products/${id}`)
            .then((res) => res.json())
            .then((json) => callback({status:"ready", list: json}));
    };

    useEffect(()=>{
        getProduct(id, setProduct);
    }, [])


    return (
        <Wrapper>
            {product.status === "ready" && (
                <>
                    <PageTitle>{product.list[0].title}</PageTitle>
                    <ProductIndividual product={product.list[0]} />
                </>
            )}
        </Wrapper>
    );
}
