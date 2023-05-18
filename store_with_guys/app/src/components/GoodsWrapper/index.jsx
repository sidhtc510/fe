import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem'

export default function GoodsWrapper() {

    const goodsArr = useSelector(state => state.goods)

  return (
    <div className='goods_wrapper'>
        {
            goodsArr.map(item => <ProductItem key={item.id} {...item} />)
        }
    </div>
  )
}
