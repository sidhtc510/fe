import React from 'react'

export default function TaskItem({id, title, price, done_flg, employee_id}) {
  return (
    <div>
        <p>{title} {price} 
        <label htmlFor="done"> is done</label>
        <input type="checkbox" name="" id="done" value={done_flg} onChange={()=>{}} />
        </p>
    </div>
  )
}
