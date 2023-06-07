import React, { useEffect, useState } from "react";
import { get_users } from "../../requests/user_request";
import { useParams } from "react-router-dom";
import User from "../User";
import s from "./s.module.css";

export default function UsersContainer() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        get_users(setUsers);
    }, []);

    const { role } = useParams();

    return (
        <div className={s.usersContainer}>
            {users
                .filter((el) => el.role === role)
                .map((el) => (
                    <User {...el} key={el.id} />
                ))}
        </div>
    );
}
