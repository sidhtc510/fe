import React, { useContext } from "react";
import Card from "../Card";
import s from "./index.module.css";
import { Context } from "../../context";

export default function CardsContainer() {
  const { cards } = useContext(Context);
  return (
    <div className={s.cards_container}>
      {cards.map((el) => (
        <Card {...el} key={el.id} />
      ))}
    </div>
  );
}
