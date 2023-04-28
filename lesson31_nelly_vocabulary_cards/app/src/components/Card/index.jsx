import React, { useContext } from "react";
import s from "./index.module.css";
import { Context } from "../../context";

export default function Card({
  id,
  rus,
  eng,
  lang

}) {

  const {deleteItem, change_single_item} = useContext(Context)

  const text = lang === "eng" ? eng : rus;

  const styles = {
    backgroundColor: lang === "eng" ? "#374861" : "rgb(41, 128, 185)",
    color: lang === "rus" ? "#374861" : "rgb(41, 128, 185)",
  };
  return (
    <div
      onDoubleClick={() => deleteItem(id)}
      onClick={() => change_single_item(id)}
      className={s.card}
      style={styles}
    >
      {text}
    </div>
  );
}
