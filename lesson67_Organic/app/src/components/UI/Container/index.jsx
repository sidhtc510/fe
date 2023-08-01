import React from 'react'
import s from './s.module.css'

export default function Container({children}) {
  return (
    <div className={s.Container_wrap}>{children}</div>
  )
}
