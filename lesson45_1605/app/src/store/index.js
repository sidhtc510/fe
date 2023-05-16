import { createStore, combineReducers } from "redux";
import { employeesReducer } from "./reducers/employeesReducer";
import { tasksReducer } from "./reducers/tasksReducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
  tasks: tasksReducer
});

export const store = createStore(rootReducer);
