import React from "react";

export default function ProductsItem({
  id,
  title,
  image,
  price,
  rating: { rate, count },
}) {
  return (
    <div className="product">
      <div>
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
      <div className="priceRaitingWrapper">
        <p>
          {price} {rate} ({count})
        </p>
        <p>
          {" "}
          <button>Add</button>{" "}
        </p>
      </div>
    </div>
  );
}
