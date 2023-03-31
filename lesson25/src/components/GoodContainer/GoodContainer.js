import React from "react";
import Good from "../Good/Good";
import { goods } from "../../data/goods";
import s from './GoodContainer.module.css'

export default function GoodContainer() {
  return (
    <div className={s.good_item}>
      {goods.map((el) => (
        <Good {...el} key={el.id} />
      ))}
    </div>
  );
}
