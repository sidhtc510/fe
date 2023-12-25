"use client"
import Link from 'next/link'
import React from 'react'
import s from './s.module.css'

export default function NavMenu() {
  return (
    <nav className={s.wrap}>
        <Link href='/'>Main page</Link>
        <Link href='/about'>About page</Link>
    </nav>
  )
}
