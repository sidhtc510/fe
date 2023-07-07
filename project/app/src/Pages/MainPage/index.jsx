import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import Banner from "../../components/Banner";
import CatalogBanner from "../../components/CatalogBanner";
import Gnome from "../../components/Gnome";
import SaleOnMain from "../../components/SaleOnMain";

export default function MainPage() {
    return (
        <Wrapper>
            <Banner />
            <CatalogBanner />
            <Gnome />
            <SaleOnMain />
        </Wrapper>
    );
}
