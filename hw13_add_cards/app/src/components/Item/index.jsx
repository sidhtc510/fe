import React from "react";

export default function Item({ id, title, price, deleteItem }) {
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
