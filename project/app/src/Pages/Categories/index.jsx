import React from "react";
import { useSelector } from "react-redux";

import CategoriesContainer from "../../components/CategoriesContainer";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";

export default function Categories() {
    const categories = useSelector((state) => state.categories);

    return (
        <Wrapper>
            <PageTitle>Categories</PageTitle>
            <CategoriesContainer categories={categories.list} />
        </Wrapper>
    );
}
