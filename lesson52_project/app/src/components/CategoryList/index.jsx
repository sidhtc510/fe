import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../CategoryItem";

export default function CategoryList() {

  const {status, list} = useSelector(({category}) => category);

  return (
    <div className="categoryList">
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        "Error..."
      ) : (
        list.map((el) => <CategoryItem key={el} title={el} />)
      )}
    </div>
  );
}
