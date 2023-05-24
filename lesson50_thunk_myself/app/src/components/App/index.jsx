import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import UsersItem from "../UsersItem";
import { usersFetch } from "../../store/asyncActions/userAsyncAction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersFetch);
  }, []);

  const users = useSelector((state) => state.users);

  return (
    <div>
      {users.map((el) => (
        <UsersItem key={el.id } {...el} />
      ))}
    </div>
  );
}

export default App;
