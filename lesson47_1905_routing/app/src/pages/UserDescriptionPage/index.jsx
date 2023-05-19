import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleUsers } from '../../data/data';
import s from './style.module.css'

export default function UserDescriptionPage() {
const {id} = useParams()

const [user, setUser] = useState({});

useEffect(() => {
    getSingleUsers(setUser, id);
  }, []);

const {firstName, lastName, maidenName, age, gender} = user
  return (
    <div className={s.user}>
        <h1>{firstName} {lastName} {maidenName}</h1>
        <h2>Gender: {gender}, Age: {age}</h2>
    </div>
  )
}
