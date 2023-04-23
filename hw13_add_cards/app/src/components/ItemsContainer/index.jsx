import React from "react";
import Item from "../Item";


export default function ItemsContainer({ item }) {


  return (
    <div className="ItemsContainer">
      {item.map(el => (
        <Item {...el} key={el.id} />
      ))}
    </div>
  );
}
