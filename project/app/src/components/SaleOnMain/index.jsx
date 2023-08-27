import React from "react";
import { useSelector } from "react-redux";

import PageTitle from "../UI/PageTitle";
import ProductsContainer from "../ProductsContainer";
import Wrapper from "../UI/Wrapper";

export default function SaleOnMain() {
    const products = useSelector((state) => state.products);

    const products_with_discount = {
        ...products,
        list: products.list.filter((el) => el.discont_price !== null).slice(0, 4),
    };

    return (
        <Wrapper>
            <PageTitle>Sale</PageTitle>
            <ProductsContainer products={products_with_discount} />
        </Wrapper>
    );
}
