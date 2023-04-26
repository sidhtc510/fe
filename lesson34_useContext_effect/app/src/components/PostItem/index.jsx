import React from 'react'

export default function PostItem({ id, title, body }) {
  return (
    <div className='wrapPost'>
        <p>{title}</p>
        <p>{body}</p>
    </div>
  )
}
