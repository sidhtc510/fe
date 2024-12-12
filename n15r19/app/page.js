// 'use client' 
import React, { Suspense, use } from 'react'

const getData = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const data = await fetch('https://fakestoreapi.com/products', { cache: 'no-cache' })
  return await data.json()
}

export default function Home() {
  const data = use(getData())

  return (
    <div>
      {data.map(el => (
        <p key={el.id}>
          {el.title}
        </p>
      ))}
    </div>
  )
}
