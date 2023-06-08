import React from "react";
import FilterContainer from "../../FilterContainer";
import ProductsList from "../../ProductsList";

export default function ProductsPage() {
    return (
        <div>
            <FilterContainer />
            <ProductsList />
        </div>
    );
}
