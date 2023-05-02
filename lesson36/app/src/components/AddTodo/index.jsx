import React from "react";

export default function AddTodo() {

  const addTodoFunction = (e) => {
    e.preventDefault();
    const item = e.target.title;
    console.log(item.value);
  };

  return (
    <form onSubmit={addTodoFunction}>
      <input type="text" name="title" placeholder="title" />
      <button>Add</button>
    </form>
  );
}
