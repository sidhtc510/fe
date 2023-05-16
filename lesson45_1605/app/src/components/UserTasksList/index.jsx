import React from "react";
import TaskItem from "../TaskItem";


export default function UserTasksList({tasks }) {


  return <div>{
    tasks.map(item => <TaskItem key={item.id} {...item}/>)
    }</div>;
}
