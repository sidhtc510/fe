import React, { useEffect } from "react";
import { fetchProducts } from "../../store/slice/productSlice";
import { useDispatch } from "react-redux";

import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import CartContainer from "../../components/CartContainer";

export default function Cart() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Wrapper>
            <PageTitle>Shopping Cart</PageTitle>
            <CartContainer />
        </Wrapper>
    );
}
