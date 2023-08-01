import React, { useEffect } from "react";

import Wrapper from "../../components/UI/Wrapper";
import Banner from "../../components/Banner";
import CatalogBanner from "../../components/CatalogBanner";
import Gnome from "../../components/Gnome";
import SaleOnMain from "../../components/SaleOnMain";
import { fetchCategories } from "../../store/slice/categoriesSlice";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slice/productSlice";

export default function MainPage() {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchProducts());
    //     dispatch(fetchCategories());
    // }, [dispatch]);

    return (
        <Wrapper>
            <Banner />
            <CatalogBanner />
            <Gnome />
            <SaleOnMain />
        </Wrapper>
    );
}
