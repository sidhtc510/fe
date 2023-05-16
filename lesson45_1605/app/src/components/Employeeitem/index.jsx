import React from "react";
import UserTasksList from "../UserTasksList";
import { useSelector } from "react-redux";

export default function Employeeitem({id, name, lastname}) {
  // const tasks = useSelector(({tasks})=>tasks.filter(({employee_id})=> employee_id === id))

  const tasks = useSelector(state => state.tasks);
  const filteredTasks = tasks.filter(el => el.employee_id === id)
  
  return (

    <div style={{border:"1px solid black", padding: "5px", margin: "5px", width:"fit-content"}}>
     


      <p>{name} {lastname}</p>
      <UserTasksList tasks={filteredTasks}/>
    </div>
  );
}
