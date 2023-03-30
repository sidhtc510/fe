import React from "react";

export default function Person({ id, email, username, address: {city}}) {
  return (
    <div className="pers">
      <h3>Person</h3>
      <p>id: {id}</p>
      <p>email: {email}</p>
      <p>username: {username}</p>
      <p>city: {city}</p>
    </div>
  );
}
