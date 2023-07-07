import React, { useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";
import ProductIndividual from "../../components/ProductIndividual";

export default function ProductPage() {
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(id));
    }, [dispatch, id]);

    const product = useSelector((state) => state.products.list[0]);
    // console.log(product);
    return (
        <Wrapper>
            <PageTitle>{product.title}</PageTitle>
            <ProductIndividual product={product} />
        </Wrapper>
    );
}
