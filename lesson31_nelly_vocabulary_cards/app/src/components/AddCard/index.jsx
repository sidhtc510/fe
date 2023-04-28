import React, { useState } from "react";
import s from "./index.module.css";
import { Context } from "../../context";
import { useContext } from "react";

export default function AddCard() {
  const {addCardF} = useContext(Context)
  return (
    <form onSubmit={addCardF} className={s.formWrapper}>
      <input type="text" placeholder="eng" name="eng" />
      <input type="text" placeholder="rus" name="rus" />
      <button>Add</button>
    </form>
  );
}
