import React from "react";
import { useSelector } from "react-redux";
import ProductsItem from "../ProductItem";

export default function ProductsList({ categoryName }) {
    const { list, status } = useSelector(({ products }) => products);

    
    const filteredProducts = categoryName
        ? list.filter((el) => el.category === categoryName)
        : list;

    return (
        <div className="productsList">
            {status === "loading" ? (
                <p>Loading...</p>
            ) : status === "error" ? (
                "Error..."
            ) : (
                filteredProducts
                    // .filter(({ show }) => show.search && show.price)
                    .filter(({ show }) =>
                        Object.values(show).every((item) => item)
                    )
                    .map((el) => <ProductsItem key={el.id} {...el} />)
            )}
        </div>
    );
}
