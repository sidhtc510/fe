import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import ProductItem from "../ProductItem";
import { fetchProducts } from "../../store/fetches";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductsContainer() {
  const dispatch = useDispatch();
  const {categoryId} = useParams()


  useEffect(() => {
    dispatch(fetchProducts(categoryId));
  }, [dispatch, categoryId]);

  const products = useSelector((state) => state.products);

  return (
    <div className={s.products_container}>
      {products.map((item) => (
        <ProductItem {...item} key={item.id} />
      ))}
    </div>
  );
}
