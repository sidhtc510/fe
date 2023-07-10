import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import CartContainer from "../../components/CartContainer";
import { useSelector } from "react-redux";

export default function Cart() {
   const data = useSelector(state=>state.cart)


    return (
        <Wrapper>
            <PageTitle>Shopping Cart</PageTitle>
            <CartContainer data={data}/>
        </Wrapper>
    );
}
