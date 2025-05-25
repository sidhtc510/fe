
import Link from 'next/link';
import React from 'react'

export default async function post() {
  const postCount = await prisma.post.count()
  const posts = await prisma.post.findMany(
    {
      where: {
        published: true
      }
    }
  );
  return (
    <>
      <div className='text-2xl'>POSTS ({postCount})</div>
      <div className=" flex flex-col">
        {
          posts.map((post) => (
            <p key={post.id}><Link href={`/post/${post.slug}`}>{post.title}</Link></p>
          ))
        }

      </div>
    </>
  )
}
