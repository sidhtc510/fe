import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import ProductsContainer from '../../components/ProductsContainer '

export default function MainPage() {
  return (
    <div>
        <h3>Welcome</h3>
        <CategoriesContainer />
        <ProductsContainer />
    </div>
  )
}
