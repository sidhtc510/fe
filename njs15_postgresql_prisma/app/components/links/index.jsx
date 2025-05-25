import Link from 'next/link'
import React from 'react'

export default function Links() {
  return (
    <h1 className="flex text-blue-600 gap-2 text-2xl font-bold mb-8">
        <Link href={"/"}>User page</Link>
        <Link href={"/post"}>Post page</Link>
      </h1>
  )
}
