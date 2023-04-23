import React, { useContext } from "react";
import Item from "../Item";
import { Context } from '../../context';

export default function ItemsContainer() {
const {item} = useContext(Context)

  return (
    <div className="ItemsContainer">
      {item.map(el => (
        <Item {...el} key={el.id} />
      ))}
    </div>
  );
}
