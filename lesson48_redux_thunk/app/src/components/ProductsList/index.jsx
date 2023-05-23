import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem'

export default function ProductsList() {
    const products = useSelector(state => state.products)
  return (
    <div>
        {products.map(item=><ProductItem key={item.id} {...item} />)}
    </div>
  )
}
