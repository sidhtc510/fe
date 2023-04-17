import React from "react";
import TodoItem from "../TodoItem";

export default function Todo({ tasks, changeStatus }) {
  return (
    <div className="todo">
        {
            tasks.map((el)=>(
                <TodoItem {...el} changeStatus={changeStatus} key={el.id}/>
            ))
        }
    </div>
  );
}
