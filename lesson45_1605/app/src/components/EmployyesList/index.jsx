import React from "react";
import { useSelector } from "react-redux";
import Employeeitem from "../Employeeitem";

export default function EmployyesList() {
  const employees = useSelector((state) => state.employees);

  return (
    <div>
      <h4>Employees list</h4>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {employees.map((el) => (
          <Employeeitem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
