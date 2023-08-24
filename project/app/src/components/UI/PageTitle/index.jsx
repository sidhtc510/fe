import React from 'react'
import s from "./s.module.css";

export default function PageTitle({children}) {
  return (
    <div className={s.PageTitle_wrapper}>{children}</div>
  )
}
