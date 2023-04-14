import React from 'react'
import CoffeeItem from '../CoffeeItem'
import s from "./style.module.css";

export default function CoffeeContainer({coffeeData}) {
  return (
    <div className={s.coffeeContainer}>
        {coffeeData.map(el=>(
            <CoffeeItem {...el} key={el.id}/>
        ))}
    </div>
  )
}
