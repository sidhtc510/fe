import { useDispatch } from "react-redux";
import ToDoList from "../ToDoList";
import { clear } from "../../store/slice/todoSlice";
import AddTask from "../AddTask";
import UsersList from "../UsersList";
import { useEffect } from "react";
import { fetchUsers } from "../../store/slice/usersSlice";

function App() {
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <div>
            <AddTask />
            <ToDoList />
            <button onClick={() => dispatch(clear())}>Clear</button>
            <hr />
            <UsersList />
        </div>
    );
}

export default App;
