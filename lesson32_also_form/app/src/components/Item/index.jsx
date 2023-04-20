import React from "react";

export default function Item({ id, name, surname, age }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
    </tr>
  );
}
