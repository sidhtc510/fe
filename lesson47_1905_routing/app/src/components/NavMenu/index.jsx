import React from 'react'
import {Link} from 'react-router-dom'
import s from './style.module.css'

export default function NavMenu
() {
  return (
    <div className={s.nav_menu}>
        <Link to='/'>Main</Link>
        <Link to='/users_page'>Users</Link>
        <Link to='/products_page'>Product</Link>
    </div>
  )
}
