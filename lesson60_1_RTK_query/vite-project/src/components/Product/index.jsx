import { useParams } from "react-router-dom"
import { useGetSingleProductQuery } from "../../redux/apiSlice"
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cartSlice";

function Product() {
    const {id} = useParams();
    const {data, isLoading} = useGetSingleProductQuery(id);
const dispatch = useDispatch()

    const addToCartHandler = (product)=>{
        dispatch(addProductToCart(product))
    }

  return (
    <div>
        {isLoading ? <h2>Loading... </h2> : 
       ( <>
             <h2>{data?.title}</h2>
            <p>{data?.price}</p>
            <button onClick={()=>addToCartHandler(data)}>Add tot cart</button>
        </>
        )
  }
    </div>
  )
}

export default Product