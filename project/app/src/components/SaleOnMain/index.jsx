import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "../UI/PageTitle";
import ProductsContainer from "../ProductsContainer";
import Wrapper from "../UI/Wrapper";
import { fetchProducts } from "../../store/slice/productSlice";

export default function SaleOnMain() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch, products]);

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
