import React from 'react'
import s from './s.module.css'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/slice/todoSlice'

export default function ToDoItem({id, task}) {
const dispatch = useDispatch()

  return (
    <div className={s.item}>
        {task}
        <button onClick={()=>dispatch(remove(id))}>X</button>
    </div>
  )
}
