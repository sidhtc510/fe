import React from "react";
import { useDispatch } from "react-redux";
import { remove, incr } from "../../store/slice/usersSlice";

export default function UserItem({ id, name, age }) {
    const dispatch = useDispatch();

    return (
        <div>
            <p onClick={() => dispatch(remove(id))}>X</p>
            <p>{name}</p>
            <p>
                {age}{" "}
                <span
                    style={{ cursor: "pointer", userSelect:"none", color:"orangered", border: "1px solid black", padding: 5, margin:20 }}
                    onClick={() => dispatch(incr(id))}
                >
                    +
                </span>
            </p>
        </div>
    );
}
