import React, { useContext } from "react";
import { Context } from "../../context";

export default function Item({ id, name, surname, age }) {
  const { deletePerson } = useContext(Context);

  return (
    <tr onClick={() => deletePerson(id)}>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
    </tr>
  );
}
