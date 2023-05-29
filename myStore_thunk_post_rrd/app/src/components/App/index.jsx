import React from "react";
import "../../main_styles.css";
import Header from "../Header";
import CategoryMenu from "../CategoryMenu";
import Banner from "../Banner";
import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main";
import ControlMenu from "../ControlMenu";
import ProductsContainer from "../ProductsContainer";

export default function App() {
  return (
    <div className="main_container">
      <Header />
      <CategoryMenu />
      <Banner />

      <div className="Wrapp_ControlContent">
        <ControlMenu />
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          <Route path="/category/:categoryId" element={<ProductsContainer />} />
        </Routes>
      </div>
    </div>
  );
}
