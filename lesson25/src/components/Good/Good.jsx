import React from "react";
import s from "./Good.module.css";
import { NavLink } from "react-router-dom";



export default function Good({
  id,
  image,
  title,
  winery,
  location,
  rating: { average, reviews },
}) {
  // const good_styles = {
  //   backgroundColor: price > 100 ? "lightgreen" : "lightblue",
  // };

  return (
    <div
      // style={good_styles}
      className={[s.good_item, s.another_style].join(" ")}
    >
      <h3>{title}</h3>
      <NavLink to={"/product/" + encodeURIComponent(id)}>link</NavLink>
      <img src={image} alt={title} />
      <div>Winery: {winery}</div>
      <div>Location: {location}</div>
      <p>
      average {average}, reviews: {reviews}
      </p>
    </div>
  );
}
