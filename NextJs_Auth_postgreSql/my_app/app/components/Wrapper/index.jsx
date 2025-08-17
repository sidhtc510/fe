import React from 'react'

export default function Wrapper({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto py-16 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    )
}
