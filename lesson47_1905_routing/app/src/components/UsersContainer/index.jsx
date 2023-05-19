import React, { useEffect, useState } from 'react'
import { getUsers } from '../../data/data';
import User from '../User';
import s from './style.module.css'

export default function UsersContainer() {
const [users, setUsers] = useState([]);

useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
<div className={s.users_container}>
      {
        users.map(el => <User key={el.id} {...el} />)
      }
    </div>
  )
}
