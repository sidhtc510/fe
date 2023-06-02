import React from "react";
import Item from "../Item";
import { useSelector } from "react-redux";


export default function ItemsContainer() {
const item = useSelector(state=>state)

  return (
    <div className="ItemsContainer">
      {item.map(el => (
        <Item {...el} key={el.id} />
      ))}
    </div>
  );
}
