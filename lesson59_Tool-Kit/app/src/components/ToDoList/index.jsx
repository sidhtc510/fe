import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from '../ToDoItem'

export default function ToDoList() {

    const list = useSelector(({todos}) => todos.list)
  return (
    <div>
        {list.map(item => <ToDoItem key={item.id} {...item} />)}
    </div>
  )
}
