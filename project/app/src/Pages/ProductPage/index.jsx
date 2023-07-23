import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";

import ProductIndividual from "../../components/ProductIndividual";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";

export default function ProductPage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchProducts(id));
    }, [dispatch, id]);

    const product = useSelector((state) => state.products);

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
