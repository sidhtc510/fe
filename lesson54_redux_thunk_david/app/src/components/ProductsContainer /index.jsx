import React, { useEffect } from "react";
import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../store/fetchActions/actions";
import { useParams } from "react-router-dom";

export default function ProductsContainer() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const { category } = useParams();

  useEffect(() => {
    dispatch(loadProducts(category));
  }, [dispatch, category]);

  return (
    <>
      <div className="productsContainer">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
