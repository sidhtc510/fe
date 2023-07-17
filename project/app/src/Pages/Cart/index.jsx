import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import CartContainer from "../../components/CartContainer";


export default function Cart({data}) {

    return (
        <Wrapper>
            <PageTitle>Shopping Cart</PageTitle>
            <CartContainer data={data} />
        </Wrapper>
    );
}
