import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "../TaskItem";

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      <h4>Tasks list</h4>
      {tasks.map((el) => (
        <TaskItem key={el.id} {...el} />
      ))}
    </div>
  );
}
