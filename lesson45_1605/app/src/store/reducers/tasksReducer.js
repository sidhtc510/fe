const initialState = [
  {id: 1, title: 'Task #1234', price: 435, done_flg: false, employee_id: 2},
  {id: 2, title: 'Task #8765', price: 26, done_flg: false, employee_id: 2},
  {id: 3, title: 'Task #2625', price: 65, done_flg: false, employee_id: 3},
  {id: 4, title: 'Task #7267', price: 287, done_flg: false, employee_id: 2},
  {id: 5, title: 'Task #3773', price: 463, done_flg: false, employee_id: 1},
];

const ADD_TASK = "[TASK] ADD_TASK";
export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });

export const tasksReducer = (state = initialState, action) => {
if(action.type === ADD_TASK){
    return [{id:Date.now(), ...action.payload}, ...state]
}
  return state;
};
