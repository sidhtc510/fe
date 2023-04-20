import React, { useState } from "react";
import UserItem from "../UserItem";

export default function UsersList() {
  const usersArray = [
    { id: 1, name: "tolik", age: 38, gender: "m" },
    { id: 2, name: "julia", age: 36, gender: "f" },
  ];

  const [users, setUsers] = useState(usersArray);

  const removeUser = (id) => {setUsers(users.filter((el) => el.id !== id))};


  return (
    <div>

      {
      users.length !== 0 ?
      users.map((user) => (
        <UserItem {...user} key={user.id} removeUser={removeUser}/>
      )) : "empty"}
    </div>
  );
}
