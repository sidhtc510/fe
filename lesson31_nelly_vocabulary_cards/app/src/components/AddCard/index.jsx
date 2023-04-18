import React from "react";
import s from "./index.module.css";

export default function AddCard({ addCardF }) {
  return (
    <form onSubmit={addCardF} className={s.formWrapper}>
      <input type="text" placeholder="eng" name="eng" />
      <input type="text" placeholder="rus" name="rus" />
      <button>Add</button>
    </form>
  );
}
