import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProductsAction } from '../../../store/reducers/goodsReducer';

export default function RemoveProducts() {

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(removeProductsAction())} className="removeAllGoods">Remove all products</button>
    </div>
  )
}
