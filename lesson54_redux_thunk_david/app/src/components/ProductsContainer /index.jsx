import React, { useEffect } from "react";
import styles from "./index.module.css";
import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../store/fetchActions/actions";
import { useParams } from "react-router-dom";

export default function ProductsContainer() {
const products = useSelector(state => state.products);

  const dispatch = useDispatch();

  const { category } = useParams();

  useEffect(() => {
    dispatch(loadProducts(dispatch, category));
  }, [category, dispatch]);
 
  return (
    <div className={styles.products_container}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
