import React from 'react'
import s from './s.module.css'

export default function PersonInArticles({img, title, description, date}) {
  return (
    <div className={s.personCard}>
        <img src={img} alt="" />
        <p className={s.title}>{title}</p>
        <p className={s.description}>{description}</p>
        <p className={s.date}>{date}</p>
    </div>
  )
}
