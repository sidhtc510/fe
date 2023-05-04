import { Context } from '../../context'
import React, { useContext } from 'react'
import Card from '../Card'


export default function CardsContainer() {
    const style ={
        display:'flex',
        justifyContent:'space-between',
        gap:'20px',
        flexWrap:'wrap',
    }

    const {people} = useContext(Context)

  return (
    <div style={style}>
        {
            people.map(el => <Card key={el.id} {...el}/>)
        }
    </div>
  )
}
