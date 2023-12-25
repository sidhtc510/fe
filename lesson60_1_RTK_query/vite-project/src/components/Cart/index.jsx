import { useSelector } from "react-redux"

function Cart() {
const {products} = useSelector(state=>state.cart)

  return (
    <div>Cart:
        {products.map(el=><p key={el.id}>{el.title}: {el.price}</p>)}
    </div>
  )
}

export default Cart