import React from 'react'
import { Link } from 'react-router-dom'
import s from './s.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
        <Link to="/">Main</Link>
        <Link to="/roles">Roles</Link>
    </div>
  )
}
