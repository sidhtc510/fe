import Link from 'next/link'
import React from 'react'

export default function best() {

    return (
        <div className={'bg-zinc-800 p-4 min-w-80'}>
             <h2 className="text-lg font-semibold">Рекомендации best</h2>
            <p>best in recommendations</p>
            <Link href={'/shop'}>back home</Link>
        </div>
    )
}
