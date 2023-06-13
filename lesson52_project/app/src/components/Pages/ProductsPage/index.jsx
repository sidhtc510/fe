import React from "react";
import FilterContainer from "../../FilterContainer";
import ProductsList from "../../ProductsList";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
    const {categoryName} = useParams()
    return (
        <div>
            <h2>{categoryName}</h2>
            <FilterContainer />
            <ProductsList categoryName={categoryName}/>
        </div>
    );
}
