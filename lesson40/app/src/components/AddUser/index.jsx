import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";

export default function AddUser() {
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();

    const { name, lastname, age, gender } = e.target;

    const user = {
      name: name.value,
      lastname: lastname.value,
      age: +age.value,
      gender: gender.value,
    };

    dispatch({ type: "ADD", payload: user });
    e.target.reset();
  };

  return (
    <form onSubmit={submit} className={s.form}>
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="lastname" placeholder="lastname" />
      <input type="number" name="age" placeholder="age" />
      <select name="gender" id="" defaultValue={0}>
        <option disabled value={0}>
          gegnder
        </option>
        <option value="m">male</option>
        <option value="f">female</option>
      </select>

      <button>Add</button>
    </form>
  );
}
