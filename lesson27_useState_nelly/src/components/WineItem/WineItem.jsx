import React from 'react'
import s from './WineItem.module.css'

export default function WineItem({id, name, price, image, delete_card}) {
  return (
    <div className={s.wine_item} onClick={()=>delete_card(id)}>
        <img src={image} alt={name} />
        <p>Title: {name}</p>
        <p>price: {price}</p>
    </div>
  )
}
