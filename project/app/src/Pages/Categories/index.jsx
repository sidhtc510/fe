import React, { useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import { useSelector } from "react-redux";
import CategoriesContainer from "../../components/CategoriesContainer";


export default function Categories() {
    const categories = useSelector((state) => state.categories);

    return (
        <Wrapper>
            <PageTitle>Categories</PageTitle>
            <CategoriesContainer categories={categories.list} />
        </Wrapper>
    );
}
