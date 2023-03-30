import React from 'react'

export default function User({id, firstname, age, position, online}) {
  return (
    <div>
        <p>id: {id}</p>
        <p>firstname: {firstname}</p>
        <p>age: {age}</p>
        <p>position: {position}</p>
        <p>online: {online}</p>
    </div>
  )
}
