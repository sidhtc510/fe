import React from "react";
import s from "./Good.module.css";

export default function Good({
  image,
  title,
  price,
  description,
  rating: { rate, count },
}) {
  const good_styles = {
    backgroundColor: price > 100 ? "lightgreen" : "lightblue",
  };

  return (
    <div
      style={good_styles}
      className={[s.good_item, s.another_style].join(" ")}
    >
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div>{price}</div>
      <div>{description}</div>
      <p>
        raiting {rate}, count: {count}
      </p>
    </div>
  );
}
