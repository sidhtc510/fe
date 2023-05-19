import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function User({ id, firstName }) {
  const user_link = `/user/${id}`
  return (
    <Link to ={user_link}>
      <div className={s.user_card}>
        <p>User: {id}</p>
        <p>Name: {firstName}</p>
      </div>
    </Link>
  );
}
