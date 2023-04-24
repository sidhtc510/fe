import { useState } from "react";
import "./App.css";
import ItemContainer from "./components/ItemContainer";
import AddItemForm from "./components/AddItemForm";
import { peopleDefault } from "./data/users.js";
import { Context } from "./context";
import Modal from "./components/Modal";

function App() {
  const [people, setPeople] = useState(peopleDefault);
  const [darkModeState, setDarkModeState] = useState(false);
  const [showModalState, setShowModalState] = useState(false);
  const [humanInModal, setHumanInModal] = useState({});

  const darkModeBtnValue = darkModeState ? "Light" : "Dark";

  const addPerson = (obj) => {
    setPeople([obj, ...people]);
  };

  const deletePerson = (id) => {
    setPeople(people.filter((el) => el.id !== id)); // намутить event.stopPropagation();
  };

  const showModal = (id) => {
    setHumanInModal(people.find((el) => el.id === id));  //правильно ли так делать??????????????????????????????????????????????????????????????
    setShowModalState(!showModalState);
  };

  const sortByAge = () => {
    const sorted = people.sort((a, b) => a.age - b.age);
    setPeople([...sorted]); //  отремонтировал
  };

  return (
    <div className={`appWrapper ${darkModeState ? "darkMode_appWrapper" : ""}`}>
      <div
        className="darkModeBtn"
        onClick={() => setDarkModeState(!darkModeState)}
      >
        {darkModeBtnValue}
      </div>
      <Context.Provider
        value={{
          people,
          addPerson,
          deletePerson,
          darkModeState,
          showModal,
          showModalState,
          setShowModalState,
          humanInModal,
          sortByAge,
        }}
      >
        <Modal />
        <AddItemForm />
        <ItemContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
