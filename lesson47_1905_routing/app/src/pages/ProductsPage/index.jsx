import React, { useEffect, useState } from "react";
import { getCategories } from "../../data/data";
import CategoryItem from "../../components/CategoryItem";

export default function ProductsPage() {
  const [categoties, setCategoties] = useState([]);

  useEffect(() => {
    getCategories(setCategoties);
  }, []);


  return (
    <div>
      {categoties.map((el,i)=> <CategoryItem key={i} category={el} />)}
    </div>
  );
}
