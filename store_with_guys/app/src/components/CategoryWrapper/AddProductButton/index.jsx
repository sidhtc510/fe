import React from 'react'

export default function AddProductButton({setModalActive}) {
  return (
         <button className="buttonShowModal" onClick={()=>setModalActive(true)}>ADD PRODUCT</button>
  )
}
