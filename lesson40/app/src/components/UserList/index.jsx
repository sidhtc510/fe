import React from 'react'
import UserItem from '../UserItem';
import s from './style.module.css'
import { useSelector } from 'react-redux';

export default function UserList() {

const users = useSelector((state) => state.users)

  return (
    <div className={s.container}>
        {users.map(user => <UserItem {...user} key={user.id} />)}
    </div>
  )
}
