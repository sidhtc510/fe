import React from "react";
import { useDispatch } from "react-redux";

export default function WordCard({ id, rus, eng, lang }) {
  const dispatch = useDispatch();
  const card_text = lang === "eng" ? eng : rus;

  return (
    <div
      onDoubleClick={() => dispatch({ type: "DELETE_CARD", payload: id })} 
      onClick={() => dispatch({ type: "CHANGE", payload: id })}
    >
      {card_text}
    </div>
  );
}
