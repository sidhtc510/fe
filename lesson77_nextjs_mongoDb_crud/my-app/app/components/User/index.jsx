import React from 'react'
import Container from '../Container'

// {name, email, phone, address:{street, zipcode, country}}
export default function User({ name, email, phone, address: { street, zipcode, country } }) {
    return (
        <Container className="flex flex-col rounded-lg bg-slate-100 p-4 m-2 shadow">
            Common data:
            <p className='ml-2'><span className='text-sm'>name:</span> {name}</p>
            <p className='ml-2'><span className='text-sm'>email:</span> {email}</p>
            <p className='ml-2'><span className='text-sm'>phone:</span> {phone}</p>
            address:
            <p className='ml-2'><span className='text-sm'>street:</span> {street}</p>
            <p className='ml-2'><span className='text-sm'>zipCode:</span> {zipcode}</p>
            <p className='ml-2'><span className='text-sm'>country:</span> {country}</p>
        </Container>
    )
}
