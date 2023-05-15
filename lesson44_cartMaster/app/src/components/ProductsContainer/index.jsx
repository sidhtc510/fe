import React from 'react'
import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem';

export default function ProductsContainer() {
    const products = useSelector((state) => state.products);

  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
        {products.map(product => <ProductItem key={product.id} {...product} />)}
    </div>
  )
}
