import React from "react";
import Offers from "../../Offers";
import ProductsContainer from "../../ProductsContainer";

export default function MainPage() {
    return (
        <div>
            {" "}
            <Offers />
            <ProductsContainer count={4} />
        </div>
    );
}
