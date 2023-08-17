import React from "react";
import Product from "../../Product";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "../../UI/Banner";

export default function ProductPage() {
    const { id } = useParams();
    const product = useSelector(({ products }) => products.list.find((el) => el.id === +id));

    return (
        <div>
             <Banner>Shop Single</Banner>
            <Product product={product} />

        </div>
    );
}
