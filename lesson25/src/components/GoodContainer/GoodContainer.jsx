import React from "react";
import Good from "../Good/Good";
import { goods } from "../../data/goods";
import s from "./GoodContainer.module.css";

export default function GoodContainer() {
  return (
    <div className={s.goods_container}>
      {goods.map((el) => (
        <Good {...el} key={el.id} />
      ))}
    </div>
  );
}
