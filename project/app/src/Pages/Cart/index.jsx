import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import CartContainer from "../../components/CartContainer";


export default function Cart() {

    return (
        <Wrapper>
            <PageTitle>Shopping Cart</PageTitle>
            <CartContainer />
        </Wrapper>
    );
}
