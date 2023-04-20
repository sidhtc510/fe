import React from 'react'
import s from './style.module.css'

export default function Product({id, title, price, amount, deleteItem, incrAmount, decrAmount, zeroAmount, incrementPrice}) {

  return (
    <div className={s.item}>
        <p>Title : {title}</p>
        <p>Price : {price}</p>
        <p>amount : {amount === 0 ? "not available" : amount}</p>
        <button onClick={()=>deleteItem(id)}>delete</button>

        <button onClick={()=>decrAmount(id)}>-</button>
        <button onClick={()=>incrAmount(id)}>+</button>
        <button onClick={()=>zeroAmount(id)}>zero</button>
        <button onClick={()=>incrementPrice(id)}>+1000</button>
    </div>
  )
}
