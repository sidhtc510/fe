import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import { useSelector } from "react-redux";

import ProductsContainer from "../../components/ProductsContainer";
import FilterSortBlock from "../../components/FiltersSortBlock";

export default function AllProducts() {


    const products = useSelector((state) => state.products);


    return (
        <Wrapper>
            <PageTitle>All Products</PageTitle>

            <FilterSortBlock products={products.list} />
            {products.status !== "ready" ? (
                "LOADING..."
            ) : (
                <ProductsContainer products={products} />
            )}
        </Wrapper>
    );
}
