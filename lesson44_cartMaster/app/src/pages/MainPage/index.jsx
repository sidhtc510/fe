import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <h2>Main Page</h2>
      <p>
        <Link to="/products_page">Products</Link>
      </p>
      <p>
        <Link to="/cart_page">Cart</Link>
      </p>
    </div>
  );
}
