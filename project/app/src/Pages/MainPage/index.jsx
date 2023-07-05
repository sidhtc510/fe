import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import Banner from "../../components/Banner";
import CatalogBanner from "../../components/CatalogBanner";

export default function MainPage() {
    return (
        <Wrapper>
            <Banner />
            <CatalogBanner />
        </Wrapper>
    );
}
