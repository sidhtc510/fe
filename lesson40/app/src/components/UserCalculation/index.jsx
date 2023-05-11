import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";

export default function UserCalculation() {
  const users = useSelector((state) => state.users);
  return (
    <div className={s.container}>
      <p>Users quantity: {users.length}</p>
      <p>male: {users.filter((el) => el.gender === "m").length}</p>
      <p>female: {users.filter((el) => el.gender === "f").length}</p>
      <p>average: {Math.round(users.reduce((acc, el) => acc + el.age, 0)/users.length)}</p>
    </div>
  );
}
