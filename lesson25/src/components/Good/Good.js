import React from "react";
import s from "./Good.module.css"

export default function Good({
  image,
  title,
  price,
  description,
  rating: { rate, count },
}) {
  const good_styles = {
    border: "1px solid black",
    padding: "10px",
    borderRadius: "20px",
    backgroundColor: price > 100 ? "lightgreen" : "lightblue",
  };

  const img_styles = {
    width: "150px",
    height: "150px",
    objectFit: "contain",
  };

  return (
    <div style={good_styles} className={s.good_item}>
      <h3>Good</h3>
      <img src={image} alt={title} style={img_styles} />
      <div>{title}</div>
      <div>{price}</div>
      <div>{description}</div>
      <p>
        raiting {rate}, count: {count}
      </p>
    </div>
  );
}
