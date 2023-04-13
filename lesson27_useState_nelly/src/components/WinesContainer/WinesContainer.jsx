import React from "react";
import WineItem from "../WineItem/WineItem";
import s from "./WinesContainer.module.css";

export default function WinesContainer({ cards, delete_card }) {
  return (
    <div className={s.wines_container}>
      {cards.map((el) => (
        <WineItem {...el} key={el.id} delete_card={delete_card} />
      ))}
    </div>
  );
}
