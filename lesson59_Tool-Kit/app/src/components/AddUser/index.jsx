import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/slice/usersSlice";

export default function AddUser() {
    const dispatch = useDispatch();

    const handler = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let obj = Object.fromEntries(data);
        obj.age = Number(obj.age);
        dispatch(add(obj))
    };

    return (
        <form onSubmit={handler}>
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="lastname" placeholder="lastname" />
            <input type="number" name="age" placeholder="age" />
            <button>Submit</button>
        </form>
    );
}
