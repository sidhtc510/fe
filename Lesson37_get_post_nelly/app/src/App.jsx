import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./data/req";
import { Context } from "./context";
import UsersContainer from "./components/UsersContainer";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{

      getUsers(setUsers, setIsLoading);
    },3000)
  }, []);

  const createNewUser = (user) => setUsers((state) => [...state, user]);

  return (
    <Context.Provider value={{ users, createNewUser }}>
        <h2 className={`app ${isLoading ? 'loading' : ''}`}>loading</h2>
        <AddUserForm />
        <UsersContainer />
      </Context.Provider>
  );
}

export default App;
