import React from "react";
import s from './style.module.css'

export default function TodoItem({ id, title, completed, changeStatus }) {
  const style = completed ? { color: "red" } : { color: "green" };
  const classN = completed ? s.taskCompleted : ''

  return (
    <div className={[s.todoItem, classN].join(' ')} style={style} onClick={()=>changeStatus(id)}>
      <p>{title}</p>
    </div>
  );
}
