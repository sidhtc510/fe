import React from "react";
import { useSelector } from "react-redux";
import BascketItem from "../BascketItem";

export default function BascketContainer() {
  const bascket = useSelector((state) => state.bascket);

  const { list } = useSelector(({ products }) => products);

  const result = bascket.map((item) => {
    const product = list.find(({ id }) => id === item.id)
    return { ...item, ...product }
  });

  return (
    <div>
      {result.map((item) => (
        <BascketItem key={item.id} {...item} />
      ))}
    </div>
  );
}
