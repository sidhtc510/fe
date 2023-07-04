import React from 'react'
import s from "./s.module.css";

export default function PageTitle({children}) {
  return (
    <div className={s.wrapper}>{children}</div>
  )
}
