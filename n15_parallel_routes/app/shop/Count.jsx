'use client'

import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Count: {count}</p>
            <p onClick={() => setCount(count+1)} className={'cursor-pointer select-none'}>Increase count</p>
        </div>
    )
}
