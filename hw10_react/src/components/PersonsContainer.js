import React from 'react'
import persons from '../data/persons'
import Person from './Person'


export default function PersonsContainer() {
  return (
    <div>
        {
            persons.map(el => <Person {...el}  key={el.id}/>)
        }
    </div>
  )
}
