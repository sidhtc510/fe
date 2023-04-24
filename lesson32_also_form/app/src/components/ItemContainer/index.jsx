import React, { useContext } from "react";
import Item from "../Item";
import { Context } from "../../context";

export default function ItemContainer() {
  const { people, darkModeState, sortByAge } = useContext(Context);

  let sumAge = people.reduce((acc, person) => (acc += person.age), 0);

  return (
    <table className={`table ${darkModeState ? "darkMode_table" : ""}`}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th onClick={sortByAge}>
            Age (Amount-{sumAge}, Average-{Math.round(sumAge / people.length)})
          </th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {people.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </tbody>
    </table>
  );
}
