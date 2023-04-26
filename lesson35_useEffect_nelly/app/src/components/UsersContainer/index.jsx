import React, { useEffect, useState } from "react";
import UserItem from "../UserItem";
import { getUsers} from "../../data/data.js";

export default function UsersContainer() {
    const [users, setUser] = useState([]);

    useEffect(() => {
      getUsers(setUser);
    }, []);

  return (
    <div>
      {users.map(el=> <UserItem  {...el} key={el.id}/>)}
    </div>
  );
}
