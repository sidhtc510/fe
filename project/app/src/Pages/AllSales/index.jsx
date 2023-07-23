import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";

import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import ProductsContainer from "../../components/ProductsContainer";
import FilterSortBlock from "../../components/FiltersSortBlock";

export default function AllSales() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const products = useSelector((state) => state.products);

    const products_with_discount = {
        ...products,
        list: products.list.filter((el) => el.discont_price !== null),
    };

    return (
        <Wrapper>
            <PageTitle>All Sales</PageTitle>
            <FilterSortBlock salesPageFlag={true} />
            {products_with_discount.status !== "ready" ? "LOADING..." : <ProductsContainer products={products_with_discount} />}
        </Wrapper>
    );
}
