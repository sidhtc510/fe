import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/slice/usersSlice'

export default function UserItem({id,name,age}) {
    const dispatch = useDispatch()
  return (
    <div>
        <p onClick={()=>dispatch(remove(id))}>X</p>
        <p>{name}</p>
        <p>{age}</p>
    </div>
  )
}
