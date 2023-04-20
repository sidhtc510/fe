import React from 'react'
import s from './style.module.css'

export default function UserItem({id,name,age,gender, removeUser}) {
  return (
    <div className={s.item} >
        <p>Name: {name} Age: {age}</p>
        <button onClick={()=>removeUser(id)}>Delete</button>
    </div>
  )
}
