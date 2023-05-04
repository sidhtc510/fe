import React from "react";
import { useDispatch } from "react-redux";

export default function AddWordForm() {
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();

    const { rus, eng } = event.target;

    const word = {
      id: Date.now(),
      rus: rus.value,
      eng: eng.value,
      lang: "eng",
    };

    dispatch({ type: "ADD_WORD", payload: word });
    event.target.reset();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="RUS" name="rus" />
      <input type="text" placeholder="ENG" name="eng" />
      <button>Add word</button>
    </form>
  );
}
