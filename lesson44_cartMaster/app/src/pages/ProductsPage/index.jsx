import React from "react";
import AddProductForm from "../../components/AddProductForm";
import ProductsContainer from "../../components/ProductsContainer";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <div>
      <AddProductForm />
      <ProductsContainer />
      <Link to="/cart_page">To Cart</Link>
    </div>
  );
}
