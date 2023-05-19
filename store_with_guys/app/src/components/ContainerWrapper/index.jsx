import React from 'react'
import CategoryWrapper from '../CategoryWrapper'
import GoodsWrapper from '../GoodsWrapper'

export default function ContainerWrapper({setModalActive}) {
  return (
    <div className='container wrapper'>
        <CategoryWrapper setModalActive={setModalActive}/>
        <GoodsWrapper />
    </div>
  )
}
