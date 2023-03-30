import React from "react";
import { users } from "../data/users";
import User from "./User";

export default function UsersContainer() {
  return (
    <div>
      {/* {users.map((el) => (
        <User
          id={el.id}
          firstname={el.firstname}
          age={el.age}
          position={el.position}
          online={el.online}
          key={el.id}
        />
      ))} */}

      {users
      .filter(el => el.firstname[0].toUpperCase() === 'A')
      .map((el) => (
        <User {...el} key={el.id} />
      ))}
    </div>
  );
}
