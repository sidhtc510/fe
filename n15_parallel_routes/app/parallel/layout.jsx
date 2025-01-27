import React from 'react'
import Header from './Header'

export default async function layout({ children, Block_one, Block_two }) {
    
    return (
        <div>
            <Header />
            {children}
            <div className="flex gap-5 text-black">
                {Block_one}
                {Block_two}
            </div>
        </div>

    )
}
