import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductsContainer() {

    const products_state = useSelector(state => state.products)

    console.log(products_state);
  return (
    <div>ProductsContainer</div>
  )
}
