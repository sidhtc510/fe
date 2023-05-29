import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={s.header}>
        <div>
          <Link to={'/'}>Logo</Link>
        </div>
        <div>
            Additional Menu
        </div>
        <div>cart</div>
    </header>
  )
}
