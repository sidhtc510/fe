import React from "react";
import { addEmployeeAction } from "../../store/reducers/employeesReducer";
import { useDispatch } from "react-redux";

export default function EmployeeAdd() {
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name: e.target.name.value,
      lastname: e.target.lastname.value,
    };

    dispatch(addEmployeeAction(newEmployee));
    e.target.reset();
  };
  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={submit}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="lastname" placeholder="lastname" />
        <button>Add</button>
      </form>
    </div>
  );
}
