import React from "react";
import ProductsContainer from "../../components/ProductsContainer ";
import CategoriesContainer from "../../components/CategoriesContainer";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  const { category } = useParams();
  return (
    <div>
      <h3>{category}</h3>
      <CategoriesContainer />
      <ProductsContainer />
    </div>
  );
}
