import React from "react";
import { useSelector } from "react-redux";
import ProductsItem from "../ProductItem";

export default function ProductsList() {
      const {list, status}= useSelector(({ products }) => products);

      return (
            <div className="productsList">
                  {status === "loading" ? (
                        <p>Loading...</p>
                  ) : status === "error" ? (
                        "Error..."
                  ) : (
                        list
                              .filter(({ show }) => show)
                              .map((el) => <ProductsItem key={el.id} {...el} />)
                  )}
            </div>
      );
}
