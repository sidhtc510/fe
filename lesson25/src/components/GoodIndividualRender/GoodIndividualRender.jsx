import React from "react";
import s from './GoodIndividualRender.module.css'

export function GoodIndividualRender(props) {
  return (
    <div className={s.product}>
      <img className={s.product_image} src={props.image} alt={props.title} />
      <h1 className={s.product_title}>{props.title}</h1>
      <p className={s.product_description}>{props.description}</p>
      <p className={s.product_price}>${props.price}</p>
    </div>
  );
}
