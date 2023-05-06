import React from "react";
import { useEffect, useState } from "react";
import "./App.css"
import TodosList from "./components/TodosList";
import Pagination from "./components/Pagination";


function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [countTodosPage, setcountTodosPage] = useState(10)



  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos([...data, {id:201, title: 'text'}]));
  }, []);

  const lastElem = currentPage * countTodosPage;
  const firsElem = lastElem - countTodosPage;
  const todosPageList = todos.slice(firsElem, lastElem)
  const countElem = Math.ceil(todos.length / countTodosPage)



  console.log(todosPageList);

  return <div>
    <TodosList todos={todosPageList}/>
    <Pagination setCurrentPage={setCurrentPage} countElem={countElem} currentPage={currentPage}/>
  </div>;
}

export default App;
