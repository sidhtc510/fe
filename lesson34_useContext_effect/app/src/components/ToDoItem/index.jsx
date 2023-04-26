import React, { useContext } from "react";
import context from "../../context";

export default function ToDoItem( {id, title}) {
  const { changeStatus, remove } = useContext(context);

  return (
    <div className="todoitem">
      {title}
      <input
        type="checkbox"
        id="scales"
        name="scales"
        onChange={() => changeStatus(id)}
      />
      <button onClick={()=>remove(id)}>Delete</button>
    </div>
  );
}
