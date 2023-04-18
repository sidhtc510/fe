import React from "react";
import Card from "../Card";
import s from './index.module.css'

export default function CardsContainer({ cards, change_single_item, deleteItem }) {
  return <div className={s.cards_container}>
    {
        cards.map(el=>(
            <Card {...el} key={el.id} change_single_item={change_single_item} deleteItem={deleteItem}/>
        ))
    }
    </div>;
}
