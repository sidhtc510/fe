import React, { useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { fetchCategoryProducts } from "../../store/slice/categoryProductsSlice";
import ProductsContainer from "../../components/ProductsContainer";
import FilterSortBlock from "../../components/FiltersSortBlock";
import { fetchCategoryProducts } from "../../store/slice/productSlice";

export default function CategoryProducts() {
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryProducts(id));
    }, [dispatch]);

    const products = useSelector((state) => state.products);

    // console.log(products);
    return (
        <Wrapper>
            <PageTitle>{products.category.title}</PageTitle>
            <FilterSortBlock products={products.list} />
            <ProductsContainer products={products} />
        </Wrapper>
    );
}
