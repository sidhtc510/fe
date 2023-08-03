import React from 'react'
import s from './s.module.css'
export default function ProductItem({id, title}) {
  return (
    <div className={s.productItem_item}>
        <p>{title}</p>
    </div>
  )
}
