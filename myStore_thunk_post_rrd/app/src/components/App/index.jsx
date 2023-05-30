import React, { useState } from "react";
import "../../main_styles.css";
import Header from "../Header";
import CategoryMenu from "../CategoryMenu";
import Banner from "../Banner";
import { Route, Routes } from "react-router-dom";
import ControlMenu from "../ControlMenu";
import ProductsContainer from "../ProductsContainer";
import { useSelector } from "react-redux";

export default function App() {
  const { products, categories } = useSelector((state) => state);
  const [categoryName, setCategoryName] = useState("");

  const getCategoryId = (categoryId) => {
    const categoryName =
      categories.find(({id}) => id === categoryId) ?? {name:"Welcome"}

        setCategoryName(categoryName.name);
  };



  return (
    <div className="main_container">
      <Header />
      <CategoryMenu categories={categories} />
      <Banner categoryName={categoryName} />

      <div className="Wrapp_ControlContent">
        <ControlMenu />
        <Routes>
          <Route
            path="/"
            element={
              <ProductsContainer
                products={products}
                getCategoryId={getCategoryId}
              />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <ProductsContainer
                products={products}
                getCategoryId={getCategoryId}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
