import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction } from "../../store/reducers/tasksReducer";

export default function TaskAdd() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handler = (event) => {
    event.preventDefault();
    const newObj = {
      title: event.target.title.value,
      price: +event.target.price.value,
      done: false,
      employee_id: +event.target.employee.value
    };

    dispatch(addTaskAction(newObj));
    event.target.reset();
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handler}>
        <input type="text" name="title" placeholder="title" />
        <input type="number" name="price" placeholder="price" />
        <select name="employee">
          {employees.map((el) => (
            <option value={el.id} key={el.id}>
              {el.name} {el.lastname}
            </option>
          ))}
        </select>
        <button>Add Task</button>
      </form>
    </div>
  );
}
