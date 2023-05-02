import React, { useEffect, useState } from "react";
import ToDoList from "../ToDoList";
import { Context } from "../../context";
import AddTodo from "../AddTodo";

export default function ToDoContainer() {
  // const initialState = [
  //   { id: 14343, title: "поесть", done: true },
  //   { id: 24343, title: "побегать", done: true },
  //   { id: 34343, title: "поспать", done: false },
  //   { id: 44343, title: "позаниматься", done: true },
  //   { id: 54343, title: "почитать", done: false },
  // ];



  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //       .then((resp) => resp.json())
  //       .then((data) =>
  //         setTodo(
  //           data.map(({ id, title, completed }) => ({
  //             id,
  //             title,
  //             done: completed,
  //           }))
  //         )
  //       );
  //   }, []);

  useEffect(() => {
    (async () => {
      if (todos.length !== 0) return;

      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await resp.json();
      const clearData = data.map(({ id, title, completed }) => ({
        id,
        title,
        done: completed,
      }));
      setTodo([...clearData]);
    })();
  }, []);

  const [todos, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem("todos"));
  });
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);




  
  const changeState = (id) => {
    const toDoState = todos.find((el) => el.id === id);
    toDoState.done = !toDoState.done;
    setTodo([...todos]);
  };

  const delTodo = (id) => {
    setTodo(todos.filter((el) => el.id !== id));
  };

  return (
    <div>
      <Context.Provider value={{ todos, changeState, delTodo }}>
        <AddTodo />
        <ToDoList />
      </Context.Provider>
    </div>
  );
}
