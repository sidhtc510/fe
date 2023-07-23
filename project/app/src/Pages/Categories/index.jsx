import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/slice/categoriesSlice";

import CategoriesContainer from "../../components/CategoriesContainer";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";

export default function Categories() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    
    const categories = useSelector((state) => state.categories);

    return (
        <Wrapper>
            <PageTitle>Categories</PageTitle>
            <CategoriesContainer categories={categories.list} />
        </Wrapper>
    );
}
