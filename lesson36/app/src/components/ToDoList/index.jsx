import React, { useContext } from "react";
import ToDoItem from "../ToDoItem";
import { Context } from "../../context";

export default function ToDoList() {
  const { todos } = useContext(Context);
  return (
    <div>
      {todos.map((item) => (
        <ToDoItem {...item} key={item.id} />
      ))}
    </div>
  );
}
