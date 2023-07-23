import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProducts } from "../../store/slice/productSlice";

import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import ProductsContainer from "../../components/ProductsContainer";
import FilterSortBlock from "../../components/FiltersSortBlock";

export default function CategoryProducts() {
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryProducts(id));
    }, [dispatch]);

    const products = useSelector((state) => state.products);

    return (
        <Wrapper>
            <PageTitle>{products.category.title}</PageTitle>
            <FilterSortBlock products={products.list} />
            <ProductsContainer products={products} />
        </Wrapper>
    );
}
