import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './style.module.css'

export default function NavMenu
() {
  return (
    <div className={[s.nav_menu, "nav_menu"].join(' ')}>
        <NavLink to='/' end>Main</NavLink>
        <NavLink to='/users_page'>Users</NavLink>
        <NavLink to='/products_page'>Product</NavLink>
    </div>
  )
}
