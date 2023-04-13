import React, { useState } from "react";
import ToDoItem from "../ToDoItem";

export default function ToDoContainer() {
  const defaultTodoList = [
    { id: 1, title: "поесть", status: 1, priority: 0 },
    { id: 2, title: "позаниматься", status: 0, priority: 0 },
    { id: 3, title: "погулять", status: 1, priority: 1 },
    { id: 4, title: "встретиться с друзьями", status: 0, priority: 1 },
    { id: 5, title: "поспать", status: 1, priority: 0 },
  ];

  const [todoList, settodoList] = useState(defaultTodoList);

  const changeStatus = (id) => {
    const newState = todoList.map((elem) => {
      if (elem.id === id) {
        elem.status = elem.status === 0 ? 1 : 0;
      }
      return elem;
    });
    settodoList(newState);
  };

  const deleteTodo = (id) => {
    const newState = todoList
    .filter(elem => elem.id !== id)
  
    settodoList(newState);
    console.log(newState);
  };


  return (
    <div>
      {todoList.map((el) => (
        <ToDoItem {...el} key={el.id} {...{changeStatus, deleteTodo}} />
      ))}
    </div>
  );
}
