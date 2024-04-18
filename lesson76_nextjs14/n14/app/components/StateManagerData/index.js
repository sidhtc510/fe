'use client'
import { fetchUsers } from '@/app/store/slices/users/usersSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function StateManagerData() {
    const dispatch = useDispatch();
    useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

    const {list, status} = useSelector(users => users.users)
  return (
    <>
        {status === 'ready' && list.map((el) => (
            <p key={el.id}>{el.name}</p>
        ))}
    </>
  )
}

export default StateManagerData