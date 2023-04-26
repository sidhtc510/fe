import React, { useContext } from 'react'
import ToDoItem from '../ToDoItem'
import context from '../../context'

export default function ToDoList() {
   const {todo} = useContext(context)
  return (
    <div>
    {todo.map(el=> <ToDoItem {...el} key={el.id}/>)}    
    </div>
  )

}
