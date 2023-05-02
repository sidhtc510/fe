import React, { useContext } from "react";
import { Context } from "../../context";
import { addUser } from "../../data/req";

export default function AddUserForm() {
  const { createNewUser } = useContext(Context);

  const addNewUser = (e) => {
    e.preventDefault();
    const { name, email, avatar } = e.target;
  
    const newUser = {
      name: name.value,
      email: email.value,
      avatar: avatar.value,
      role: "customer",
      password: "1234",
    };

    addUser(newUser, createNewUser);
  };

  return (
    <form onSubmit={addNewUser}>
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="email" placeholder="email"/>
      <input type="text" name="avatar" placeholder="avatar"/>
      <button>Add</button>
    </form>
  );
}
