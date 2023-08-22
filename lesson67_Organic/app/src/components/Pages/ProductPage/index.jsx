import React from "react";
import Product from "../../Product";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "../../UI/Banner";
import RelatedProducts from "../../RelatedProducts";
import img from "./img.jpg";
export default function ProductPage() {
    const { id } = useParams();
    // const product = useSelector(({ products }) => products.list.find((el) => el.id === +id));
    const { list, status } = useSelector(({ products }) => products);

    if (status !== "ready") {
        return "";
    } else {
        const product = list.find((el) => el.id === +id);
        return (
            <div>
                <Banner img={img}>Shop Single</Banner>
                <Product product={product} />

                <RelatedProducts type={product.type} currentProductId={id} />
            </div>
        );
    }
}
