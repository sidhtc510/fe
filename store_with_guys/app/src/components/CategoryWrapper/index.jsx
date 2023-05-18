import React from 'react'
import PriceRange from './PriceRange'
import RemoveProducts from './RemoveProducts'
import SortPrice from './SortPrice'
import ShowAmount from './ShowAmount'
import AddProduct from './AddProduct'

export default function CategoryWrapper() {
  return (
    <div className="category_wrap">
            <AddProduct />
            <PriceRange />
            <RemoveProducts />
            <SortPrice />
            <ShowAmount />
        </div>
  )
}
