import React from "react";
import Item from "../Item";

export default function ItemsContainer({ item, deleteItem }) {
  return (
    <div className="ItemsContainer">
      {item.map(el => <Item {...el } deleteItem={deleteItem} key={el.id} />)}
    </div>
  );
}