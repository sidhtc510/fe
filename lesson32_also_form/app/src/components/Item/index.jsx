import React, { useContext } from "react";
import { Context } from "../../context";

export default function Item({ id, name, surname, age }) {
  const { deletePerson, showModal } = useContext(Context);

  return (
    <tr onClick={()=>showModal(id)}>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td><button className="buttonDelete" onClick={() => deletePerson(id)}>X</button></td>
    </tr>
  );
}
