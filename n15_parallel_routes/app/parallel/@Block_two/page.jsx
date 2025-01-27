import Link from 'next/link'
import React from 'react'

export default async function Block_two() {
  // throw new Error('error 000')


  // await setTimeout(() => {
  //   console.log('waaait');

  // }, 2000)



  return (
    <div className='w-40 h-40 bg-yellow-400  m-10 border-cyan-100'>
      <p>Block_two</p>
      <Link href='parallel/settings'>settings</Link>
    </div>
  )
}
