import React from "react";

export default function User({ name, lastname, age }) {

    // const { name, lastname, age } = { name: "tolik", lastname: "sid", age: "38" };
    // const { name, lastname, age } = {props};

  return (
    <div>
      <p>{name}</p>
      <p>{lastname}</p>
      <p>{age}</p>
    </div>
  );
}
