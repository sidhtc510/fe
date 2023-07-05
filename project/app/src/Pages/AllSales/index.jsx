import React, { useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";
import ProductsContainer from "../../components/ProductsContainer";

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
            {products_with_discount.status !== "ready" ? (
                "LOADING..."
            ) : (
                <ProductsContainer products={products_with_discount} />
            )}
        </Wrapper>
    );
}
