import React from 'react'
import { deleteAction } from '../../store/reducers/goodsReducer'
import { useDispatch } from 'react-redux'


export default function ProductItem({id, price, product, in_stock, image})
 {

    const defaultImg = !image ? './images/noImage.webp' : './images/'+ image
    const stateInstock = in_stock ?  'in stock' : 'not available'
    const style = {
        color: in_stock ? 'green' : 'red'
    }

    const dispatch = useDispatch();


  return (
    <div className='product'>
        <button className='closeBtn' onClick={() => dispatch(deleteAction(id))}>X</button>
        <img className='img' src={defaultImg} alt="" />
        <div>
            <p className='title'>{product}</p>
            <p className='price_actual'>{price}</p>
        </div>
        <div>
            <p style={style} className='available'>{stateInstock}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}
