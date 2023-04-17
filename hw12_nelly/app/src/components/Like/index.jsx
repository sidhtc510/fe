import React, { useState } from 'react'
import likeImg from "../../data/images/like.svg"
import s from './style.module.css'


export default function Like() {
const [likeQuantity, setlikeQuantity] = useState(0);

  return (
    <div className={s.like} onClick={()=>setlikeQuantity(likeQuantity + 1)}>
        <span className={s.count}>{likeQuantity}</span>
        <img src={likeImg} alt="" />
    </div>
  )
}
