import React, { useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";
import ProductsContainer from "../../components/ProductsContainer";

export default function AllProducts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const products = useSelector((state) => state.products);

    return (
        <Wrapper>
            <PageTitle>All Products</PageTitle>
            {products.status !== "ready" ? "LOADING..." : (
                <ProductsContainer products={products} />
                )}
        </Wrapper>
    );
}
