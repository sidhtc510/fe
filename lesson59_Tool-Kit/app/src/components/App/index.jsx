import { useDispatch, useSelector } from "react-redux";
import ToDoList from "../ToDoList";
import { clear } from "../../store/slice/todoSlice";
import AddTask from "../AddTask";
import UsersList from "../UsersList";
import { useEffect } from "react";
import { fetchUsers } from "../../store/slice/usersSlice";
import { fetchToDo } from "../../store/slice/todoSlice";
import AddUser from "../AddUser";
import { fetchProducts } from "../../store/slice/productsSlice";

function App() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.list);

    useEffect(() => {
        dispatch(fetchToDo());
        dispatch(fetchUsers());
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div>
            <AddTask />
            <ToDoList />
            <button onClick={() => dispatch(clear())}>Clear</button>
            <hr />
            <AddUser />
            <UsersList />
        </div>
    );
}

export default App;
