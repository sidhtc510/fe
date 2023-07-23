import React, { useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import ProductsContainer from "../../components/ProductsContainer";
import FilterSortBlock from "../../components/FiltersSortBlock";
import { fetchProducts } from "../../store/slice/productSlice";

export default function AllProducts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const products = useSelector((state) => state.products);

    return (
        <Wrapper>
            <PageTitle>All Products</PageTitle>

            <FilterSortBlock />
            {products.status === "loading" ? (
                <p>Loading...</p>
            ) : products.status === "error" ? (
                "Error..."
            ) : (
                <ProductsContainer products={products} />
            )}
        </Wrapper>
    );
}
