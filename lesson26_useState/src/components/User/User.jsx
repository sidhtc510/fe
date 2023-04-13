import React from 'react'
import s from './style.module.css'

export default function User({name, lastname, position}) {
  return (
    <div className={s.item}>
        <p>{name}</p>
        <p>{lastname}</p>
        <p>{position}</p>
    </div>
  )
}
