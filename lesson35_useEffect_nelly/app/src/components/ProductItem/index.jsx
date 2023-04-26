import React from 'react'

export default function ProductItem({id,title,description,price}) {
  return (
    <div className='productItem'>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}
