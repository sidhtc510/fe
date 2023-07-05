import React, { useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProducts } from "../../store/slice/categoryProductsSlice";
import ProductsContainer from "../../components/ProductsContainer";

export default function CategoryProducts() {
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryProducts(id));
    }, [dispatch]);

    const categoryProducts = useSelector((state) => state.categoryProducts);
 

    return (
        <Wrapper>
            <PageTitle>{categoryProducts.category.title}</PageTitle>

            <ProductsContainer products={categoryProducts} />
        </Wrapper>
    );
}
