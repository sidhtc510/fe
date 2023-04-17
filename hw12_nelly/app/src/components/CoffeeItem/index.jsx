import React from "react";
import s from "./style.module.css";
import imageNotAvailable from "../../data/images/imageNotAvailable.jpg";
import Like from "../Like";

export default function CoffeeItem({
  id,
  title,
  image,
  description,
  ingredients,
  deleteItem
}) {
  return (
    <div className={s.сoffeeItem}>
      {/* <p>id: {id}</p> */}
      <div className={s.deleteBtn} onClick={()=>deleteItem(id)}>X</div>
      <p>title: {title}</p>
      <img
        className={s.сoffeeItemImg}
        src={image ? image : imageNotAvailable}
        alt={title}
      />
      <p>{description}</p>
      <div className={s.ingredientsWrapper}>
        <p>ingredients:</p>
        <ul>
          {ingredients.map((el) => (
            <li >{el} </li>
          ))}
        </ul>
      </div>

      <Like />
    </div>
  );
}
