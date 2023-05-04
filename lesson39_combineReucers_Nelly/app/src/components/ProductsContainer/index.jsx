import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem';

export default function ProductsContainer() {

    const products_state = useSelector(state => state.products)

    console.log(products_state);
  return (
    <div>
      {
        products_state.map(el => <ProductItem {...el} key={el.id}/>)
      }
    </div>
  )
}
