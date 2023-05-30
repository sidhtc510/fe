import React, { useContext } from "react";
import PriceRange from "./PriceRange";
import RemoveProducts from "./RemoveProducts";
import SortPrice from "./SortPrice";
import ShowAmount from "./ShowAmount";
import AddProductButton from "./AddProductButton";
// import { Context } from "../../context";

export default function CategoryWrapper() {
  // const { whichStateWeUse } = useContext(Context);
  return (
    <div className="category_wrap">
      <AddProductButton />
      <PriceRange />
      <RemoveProducts />
      <SortPrice />
      {/* <ShowAmount /> */}
      {/* <p>{whichStateWeUse}</p> */}
    </div>
  );
}
