import React from "react";
import Cart from "../../components/Cart";
import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <div>
      <Cart />
      <Link to = "/products_page"> ProductsPage
      </Link>
    </div>
  );
}
