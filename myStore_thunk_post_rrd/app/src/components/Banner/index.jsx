import React from 'react'
import s from './style.module.css'

export default function Banner() {
    return (
        <div className={s.container}>
        <h2>Main Page with all products</h2>
        <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2ODUzNDk0MjE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" />
    </div>
  )
}
