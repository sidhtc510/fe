import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../CategoryItem";

export default function CategoryList() {
  const categories = useSelector((state) => state.category);
  return (
    <div>
      {categories.map((el) => (
        <CategoryItem key={el} title={el} />
      ))}
    </div>
  );
}
