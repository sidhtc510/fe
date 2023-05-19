import React from 'react'
import PriceRange from './PriceRange'
import RemoveProducts from './RemoveProducts'
import SortPrice from './SortPrice'
import ShowAmount from './ShowAmount'
import AddProductButton from './AddProductButton'

export default function CategoryWrapper({setModalActive}) {
  return (
    <div className="category_wrap">
            <AddProductButton setModalActive={setModalActive}/>
            <PriceRange />
            <RemoveProducts />
            <SortPrice />
            <ShowAmount />
        </div>
  )
}
