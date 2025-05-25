import Links from '@/app/components/links'
import React from 'react'

export default async function individual_post({ params }) {
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug
        }
    })
    console.log(post);


    return (
        <div className='flex flex-col'>

            <p>title - {post.title}</p>
            <p>slug - {post.slug}</p>
            <p>content - {post.content}</p>
            <p>published - {post.published}</p>
            <p>updated_at - {new Date(post.updated_at).toLocaleDateString()}</p>
            <p>created_at - {new Date(post.created_at).toLocaleDateString()}</p>

        </div>
    )
}
