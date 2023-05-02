import React from "react";
import { useDispatch } from "react-redux";

export default function AddWord() {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const word = {
      id: Date.now(),
      title: e.target.word.value
    };
    dispatch({ type: "ADD", payload: word });
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="new task" name="word" />
      <button>Add</button>
    </form>
  );
}
