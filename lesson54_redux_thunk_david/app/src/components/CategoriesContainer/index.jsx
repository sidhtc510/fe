import React, { useEffect } from "react";
import styles from "./index.module.css";
import Category from "../Category";
import { fetchAction } from "../../store/fetchActions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchAction);
  }, [dispatch]);

  return (
    <div className={styles.categories_container}>
      {categories.map((category) => (
        <Category name={category} key={category} />
      ))}
    </div>
  );
}
