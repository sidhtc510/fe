import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/slice/todoSlice";

export default function AddTask() {
    const dispatch = useDispatch();

    const handle = (e) => {
        e.preventDefault();

        dispatch(add(e.target.task.value));
        e.target.reset();
    };
    return (
        <form onSubmit={handle}>
            <input type="text" name="task" />
            <button>Add</button>
        </form>
    );
}
