import React from "react";

export default function CategoryItem({ category }) {
  const category_up = category[0].toUpperCase() + category.slice(1);
  return <div>{category_up}</div>;
}
