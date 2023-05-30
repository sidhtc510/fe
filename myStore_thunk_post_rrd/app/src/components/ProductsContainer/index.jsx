import React, { useEffect } from "react";
import s from "./style.module.css";
import ProductItem from "../ProductItem";
import { fetchProducts } from "../../store/fetches";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductsContainer({ products, getCategoryId }) {
  const dispatch = useDispatch();

  const { categoryId } = useParams();

  useEffect(() => {
    getCategoryId(parseInt(categoryId));
  }, [getCategoryId, categoryId]);

  useEffect(() => {
    dispatch(fetchProducts(categoryId));
  }, [dispatch, categoryId]);

  return (
    <div className={s.products_container}>
      {products.map((item) => (
        <ProductItem {...item} key={item.id} />
      ))}
    </div>
  );
}
