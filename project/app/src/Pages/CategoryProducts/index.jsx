import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import ProductsContainer from "../../components/ProductsContainer";
import FilterSortBlock from "../../components/FiltersSortBlock";

export default function CategoryProducts() {
    const { id } = useParams();
    const categoryId = +id;

    const products = useSelector((state) => state.products);
    
    const filteredListByCategory = products.list.filter((el) => el.categoryId === categoryId);
    const productsByCategory = { ...products, list: filteredListByCategory };
    
    const categories = useSelector((state) => state.categories);
const category = categories.list.find(el=>el.id === categoryId)

    return (
        <Wrapper>
            {products.status === "ready" && (
                <>
                    <PageTitle>{categories.status === 'ready' && category.title}</PageTitle>
                    <FilterSortBlock />
                    <ProductsContainer products={productsByCategory} />
                </>
            )}
        </Wrapper>
    );
}
