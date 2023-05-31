import React from "react";
import CategoryWrapper from "../CategoryWrapper";
import GoodsWrapper from "../GoodsWrapper";

export default function ContainerWrapper() {
  return (
    <div className="container wrapper">
      <CategoryWrapper />
      <GoodsWrapper />
    </div>
  );
}
