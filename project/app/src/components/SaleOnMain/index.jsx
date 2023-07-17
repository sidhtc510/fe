import React, { useEffect } from "react";
import Wrapper from "../UI/Wrapper";
import PageTitle from "../UI/PageTitle";
import { useSelector } from "react-redux";
import ProductsContainer from "../ProductsContainer";

export default function SaleOnMain() {

    const products = useSelector((state) => state.products);

    const products_with_discount = {
        ...products,
        list: products.list.filter((el) => el.discont_price !== null).slice(0,4),
    };

    return (
        <Wrapper>
            <PageTitle>Sale</PageTitle>
            <ProductsContainer products={products_with_discount} />
        </Wrapper>
    );
}
