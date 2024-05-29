'use client'
import React from 'react'
import Container from '../Container'
import { useRouter } from 'next/navigation'

// {name, email, phone, address:{street, zipcode, country}}
export default function User({ _id, name, email, phone, address: { street, zipcode, country } }) {
    const router = useRouter()

    const deleteHandler = async (id) => {
        const confirmed = confirm('delete?')

        if (confirmed) {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/users?id=${id}`, {
                    method: "DELETE"
                })
            
                if (res.ok) {
                    router.refresh();
                    router.push('/users')
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <Container className="flex flex-col rounded-lg bg-slate-100 p-4 m-2 shadow">
            <div>
                Common data:
                <p className='ml-2'><span className='text-sm'>name:</span> {name}</p>
                <p className='ml-2'><span className='text-sm'>email:</span> {email}</p>
                <p className='ml-2'><span className='text-sm'>phone:</span> {phone}</p>
                address:
                <p className='ml-2'><span className='text-sm'>street:</span> {street}</p>
                <p className='ml-2'><span className='text-sm'>zipCode:</span> {zipcode}</p>
                <p className='ml-2'><span className='text-sm'>country:</span> {country}</p>
            </div>
            <div>
                <button onClick={() => deleteHandler(_id)} className="text-red-700">Delete</button>
            </div>
        </Container>
    )
}
