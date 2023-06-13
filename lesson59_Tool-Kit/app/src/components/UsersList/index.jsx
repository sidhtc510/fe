import React from "react";
import { useSelector } from "react-redux";
import UserItem from "../UserItem";

export default function UsersList() {
    const { users } = useSelector((state) => state);
    return <div>
        
        {users.list.map(el=><UserItem key={el.id} {...el} />)}
    </div>;
}
