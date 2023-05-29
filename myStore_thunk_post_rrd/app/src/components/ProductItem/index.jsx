import React from 'react'
import s from './style.module.css'
export default function ProductItem({id, title}) {
  return (
    <div className={s.product}>
        <p>{id}</p>
        <p>{title}</p>
    </div>
  )
}
