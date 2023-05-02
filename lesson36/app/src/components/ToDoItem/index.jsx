import React, { useContext } from "react";
import s from "./style.module.css";
import { Context } from "../../context";

export default function ToDoItem({ id, title, done }) {
const {changeState, delTodo} = useContext(Context)

  return (
    <div className={s.todoItem}>
      <p>{title}</p>
      <input type="checkbox" checked={done} onChange={() => {changeState(id)}} />
      <button onClick={()=>delTodo(id)}>Delete</button>
    </div>
  );
}
