import React from 'react'
import { priceRangeAction } from '../../../store/reducers/goodsReducer'
import { useDispatch, useSelector } from 'react-redux'

export default function PriceRange() {

    const dispatch = useDispatch();

    const state = useSelector(state => state.goods)
    const minPrice = Math.min(...state.map(item => item.price))
    const maxPrice = Math.max(...state.map(item => item.price))
    const handler = e => {
        e.preventDefault()
       const priceRange = {
        minPrice: e.target.minDigit.value,
        maxPrice: e.target.maxDigit.value
       }
       dispatch(priceRangeAction(priceRange));

    }
 
  return (
    <form onSubmit={handler} id="filterForm">
                <div>
                    <label htmlFor="minDigit">min</label>
                <input type="number" id="minDigit" defaultValue={minPrice} key={minPrice - 1} name='minDigit'/><br/>
                    <label htmlFor="maxDigit">max</label>
                    <input type="number" id="maxDigit" defaultValue={maxPrice} key={maxPrice + 1} name='maxDigit'/>
                </div>
                <input type="submit" value="Apply"/>
    </form>
  )
}



