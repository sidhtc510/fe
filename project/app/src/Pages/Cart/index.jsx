import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import CartContainer from "../../components/CartContainer";

export default function Cart() {
    const data = [
        {
            categoryId: 1,
            createdAt: "2022-10-02T14:43:29.000Z",
            description:
                "Angelonia angustifolia Archangel™ White displays pristine white blossoms arranged on tall stems that sparkle above clean, glossy, dark green foliage. These sturdy, well-branched plants add texture and commanding presence to borders, containers, and flower arrangements.",
            discont_price: null,
            id: 2,
            image: "/product_img/2.jpeg",
            price: 10.75,
            title: "Angelonia angustifolia Archangel™ White",
            updatedAt: "2022-10-02T14:43:29.000Z",
        },
        {
            categoryId: 1,
            createdAt: "2022-10-02T14:43:29.000Z",
            description:
                "Angelonia angustifolia Archangel™ White displays pristine white blossoms arranged on tall stems that sparkle above clean, glossy, dark green foliage. These sturdy, well-branched plants add texture and commanding presence to borders, containers, and flower arrangements.",
            discont_price: null,
            id: 3,
            image: "/product_img/2.jpeg",
            price: 10.75,
            title: "222 Angelonia angustifolia Archangel™ White",
            updatedAt: "2022-10-02T14:43:29.000Z",
        },
    ];


    return (
        <Wrapper>
            <PageTitle>Shopping Cart</PageTitle>
            <CartContainer data={data}/>
        </Wrapper>
    );
}
