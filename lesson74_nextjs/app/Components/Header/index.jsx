import Link from 'next/link'
import React  from 'react'
import s from './s.module.css'

export default function Header() {
    const id = (Math.random()*100).toFixed(0)

  return (
    <div className={s.Header__wrap}>
        <Link href={'/'}>Home page</Link>
        <Link href={'/posts'}>posts page</Link>
        <Link href={`/posts/${id}`}>Dynamic post </Link>
    </div>
  )
}
