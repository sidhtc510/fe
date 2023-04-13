import React from "react";
import s from './style.module.css'

export default function ToDoItem({id, title, status, priority, changeStatus, deleteTodo}) {
  
  const style = {
    backgroundColor: priority === 0 ? "#27ae60" : "#e67e22",
    color: status === 1 ? "#4e4e4e" : '',
    textDecoration: status === 1 ? "line-through" : '',
  };

  return (
    <div style={style} className={s.item}>
      <p>title: {title}</p>
      <input type="checkbox" checked={status} onChange={()=>changeStatus(id) } />
      <button onClick={()=>deleteTodo(id)}>Delete</button>
    </div>
  );
}
// зеленый #27ae60
// красный #e67e22