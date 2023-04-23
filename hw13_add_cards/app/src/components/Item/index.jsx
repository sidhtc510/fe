import React, { useContext } from "react";
import { Context } from '../../context.js';

export default function Item({ id, title, price }) {
  const { deleteItem } = useContext(Context);

  return (
    <div className="item">
      <div className="closeBtn" onClick={() => deleteItem(id)}>
        X
      </div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}
