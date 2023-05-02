import React from "react";
import { useSelector } from "react-redux";
import WordItem from "../WordItem";

export default function WordsList() {
  const words = useSelector((state) => state);

  return (
    <div>
      {words.map((word) => (
        <WordItem {...word} key={word.id} />
      ))}
    </div>
  );
}
