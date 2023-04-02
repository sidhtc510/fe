import React from "react";
import Good from "../Good/Good";
import { goods } from "../../data/wines";
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
