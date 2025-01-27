import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='flex gap-4 text-lg border-b-2 border-white p-6'>
            <Link href="/parallel">parallel home</Link>
            <Link href="/parallel/settings">parallel settings</Link>
        </div>
    )
}
