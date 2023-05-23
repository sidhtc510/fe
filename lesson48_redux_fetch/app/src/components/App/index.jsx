import React, { useEffect } from "react";
import UsersList from "../UsersList";
import { useDispatch } from "react-redux";

import LoadUser from "../LoadUser";
import ProductsList from "../ProductsList";
import { fetchProducts } from "../../store/asyncActions/productAction";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <div>
      <LoadUser />
      <UsersList />
      <ProductsList />
    </div>
  );
}
