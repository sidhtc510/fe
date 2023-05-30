import React from 'react'
import { useDispatch } from 'react-redux';
import { DECREMENTBascketAction, INCREMENTBascketAction } from '../../store/reducers/bascketReducer';

export default function BascketItem({id, title, count}) {
    const dispatch = useDispatch();

  return (
    <div>
        <p>{title}</p>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(DECREMENTBascketAction( id ))}>-</button>
            <button onClick={()=>dispatch(INCREMENTBascketAction( id ))}>+</button>
        </div>
    </div>
  )
}
