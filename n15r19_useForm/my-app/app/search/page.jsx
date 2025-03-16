import React from 'react'

export default async function searchPage({ searchParams }) {
    const res = await searchParams || '';


    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${res.id}`)
        .then(response => response.json())
        .then(json => json)

    return (
        <div>
            <p>id: {res.id}</p>
            <p className='border border-white p-2 max-w-fit bg-gray-600'>post: {data.title}</p>

        </div>
    )
}
