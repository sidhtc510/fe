import { employees } from "../../data/employees";

const ADD_EMPLOYEE = "[EMPLOYEE] ADD_EMPLOYEE";
export const addEmployeeAction = (payload) => ({ type: ADD_EMPLOYEE, payload });

export const employeesReducer = (state = employees, action) => {
  if (action.type === ADD_EMPLOYEE) {
    return [ { id: Date.now(), ...action.payload }, ...state];
  }
  return state;
};
