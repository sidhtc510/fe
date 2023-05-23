import React from "react";
import s from "./style.module.css";

export default function UserItem({ id, name, lastname }) {
  return (
    <div className={s.user}>
      <p>id: {id}</p>
      <p>
        Name: {name} {lastname}
      </p>
    </div>
  );
}
