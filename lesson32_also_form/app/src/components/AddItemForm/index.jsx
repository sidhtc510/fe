import React, { useState, useContext } from "react";
import { Context } from "../../context.js";

export default function AddItemForm() {
  const [age, setAge] = useState("age");

  const { addPerson, darkModeState } = useContext(Context);
  
  
  function handleAgeChange(event) {
    const inputAge = event.target.value;
    if (inputAge >= 1 && inputAge <= 90) {
      setAge(inputAge);
    } else {
      setAge("");
    }
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    const { name, surname, age } = event.target;

    const newItem = {
      id: Date.now(),
      name: name.value,
      surname: surname.value,
      age: +age.value,
    };
    addPerson(newItem);
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit} className={`formAddItem ${darkModeState ? "darkMode_formAddItem" : ""}`}>
        <h3>Add new person</h3>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="text" name="surname" placeholder="Enter surname" />
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={age}
          onChange={handleAgeChange}
        />
           {!age && <p>Please enter a valid age between 1 and 90.</p>}

        <button>Add</button>
      </form>
    </>
  );
}
