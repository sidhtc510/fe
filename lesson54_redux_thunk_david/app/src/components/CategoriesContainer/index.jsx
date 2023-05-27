import React, { useEffect } from "react";
import styles from "./index.module.css";
import Category from "../Category";
import { fetchAction } from "../../store/fetchActions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchAction);
  }, [dispatch]);

  return (
    <div className={styles.categories_container}>
         <Link to={`/`}>
        <div className="category_card">
          <p>Main page</p>
        </div>
      </Link>
      {categories.map((category) => (
        <Category name={category} key={category} />
      ))}
    </div>
  );
}
