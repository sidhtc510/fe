
import React from 'react'
import s from './index.module.css'

export default function User({id, name, email, avatar}) {

    const email_link = `mailto:${email}`
  return (
    <div className={s.user_item}>
        <img src={avatar} alt={name}/>
        <p>{name}</p>
        <a href={email_link}>{email}</a>
    </div>
  )
}
