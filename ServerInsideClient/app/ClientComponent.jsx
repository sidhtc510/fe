'use client'

export default function ClientComponent({ children }) {
    console.log('client');
    return (
        <div>{children}</div>
    )
}
