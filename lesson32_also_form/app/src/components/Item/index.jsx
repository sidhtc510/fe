import React, { useContext } from "react";
import { Context } from "../../context";

export default function Item({ id, name, surname, age }) {
  const { deletePerson, showModal } = useContext(Context);

  const delete_person = (e) => {
    deletePerson(id);
    e.stopPropagation();
  };

  return (
    <tr onClick={() => showModal(id)}>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>
        <button className="buttonDelete" onClick={delete_person}>
          X
        </button>
      </td>
    </tr>
  );
}
