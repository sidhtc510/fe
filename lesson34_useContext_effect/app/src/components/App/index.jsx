import { useEffect, useState } from "react";
import ToDoList from "../ToDoList";
import context from "../../context.js";
import "./style.css";
import PostsList from "../PostsList";

function App() {
  // const initialState = [
  //   {
  //     id: 1,
  //     title: "task1",
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     title: "task2",
  //     done: false,
  //   },
  // ];

  const [todo, setTodo] = useState([]);




  const changeStatus = (id) => {
    setTodo(
      todo.map((elem) => {
        if (elem.id === id) {
          elem.done = !elem.done;
        }
        return elem;
      })
    );
  };

  const remove = (id) => {
    setTodo(todo.filter((el) => el.id !== id));
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((resp) => resp.json())
  //     .then((data) =>
  //       setTodo(
  //         data.map(({ id, title, completed }) => ({
  //           id,
  //           title,kf
  //           done: completed,
  //         }))
  //       )
  //     );
  // }, []);




  // useEffect(() => {
  //   (async () => {
  //     const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await resp.json();
  //     const clearData = data.map(({ id, title, completed }) => ({
  //       id,
  //       title,
  //       done: completed,
  //     }));
  //     setTodo(clearData);
  //   })();
  // }, []);




  return (
    <context.Provider value={{ todo, changeStatus, remove }}>
      <ToDoList />
      <PostsList />
    </context.Provider>
  );
}

export default App;
