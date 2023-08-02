import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";

import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import ProductsContainer from "../../components/ProductsContainer";
import FilterSortBlock from "../../components/FiltersSortBlock";

export default function CategoryProducts() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const categoryId = +id;

    const products = useSelector((state) => state.products);
    const filteredListByCategory = products.list.filter((el) => el.categoryId === categoryId);
    const productsByCategory = { ...products, list: filteredListByCategory };

    return (
        <Wrapper>
            {products.status === "ready" && (
                <>
                    <PageTitle>{products.category.title}</PageTitle>
                    <FilterSortBlock products={products.list} />
                    <ProductsContainer products={productsByCategory} />
                </>
            )}
        </Wrapper>
    );
}
