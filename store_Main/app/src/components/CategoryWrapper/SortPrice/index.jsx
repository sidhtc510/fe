import React from 'react'
import { sortPriceAscAction } from '../../../store/reducers/goodsReducer'
import { sortPriceDescAction } from '../../../store/reducers/goodsReducer';
import { useDispatch } from 'react-redux'

export default function SortPrice() {

    const dispatch = useDispatch();

  return (
    <div className="orderBy">
    <p onClick={() => dispatch(sortPriceAscAction())} className="asc">цена по возрастанию</p>
    <p onClick={() => dispatch(sortPriceDescAction())} className="desc">цена по убыванию</p>
    </div>
  )
}
