import React from 'react'
import { useSelector } from "react-redux";
import UserItem from '../UserItem';

export default function UsersList() {
    const users = useSelector(state => state.users)

  return (
    <div style={{display:"flex", gap: "20px", flexWrap:"wrap", justifyContent: "start", marginTop:"20px"}}>
        {users.map(el=><UserItem key={el.id} {...el} />)}
    </div>
  )
}
