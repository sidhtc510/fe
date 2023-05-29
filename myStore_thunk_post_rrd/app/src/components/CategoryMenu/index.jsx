import React, { useEffect } from "react";
import s from "./style.module.css";
import { fetchCategories } from "../../store/fetches";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CategoryMenu() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories);
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);

  return (
    <div className={s.container}>
      {categories.map((cat) => (
        <Link to={`/category/${cat.id}`} key={cat.id}>
          <p>{cat.name}</p>
        </Link>
      ))}
    </div>
  );
}
