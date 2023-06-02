import React from 'react'
import s from './s.module.css'
import { Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
      <Link to="/">Configurations</Link>
      <Link to="/team_page">Teams</Link>
    </div>
  )
}
