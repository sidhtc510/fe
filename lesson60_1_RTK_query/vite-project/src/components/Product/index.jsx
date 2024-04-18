import { useParams } from "react-router-dom"
import { useGetSingleProductQuery } from "../../redux/apiSlice"
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cartSlice";

function Product() {
    const {id} = useParams();
    const {data: product, isLoading} = useGetSingleProductQuery(id);
    console.log("product", product)
const dispatch = useDispatch()

    const addToCartHandler = (product)=>{
        dispatch(addProductToCart(product))
    }

  return (
    <div>
        {isLoading ? <h2>Loading... </h2> : 
       ( <>
             <h2>{product?.title}</h2>
            <p>{product?.price}</p>
            <button onClick={()=>addToCartHandler(product)}>Add tot cart</button>
        </>
        )
  }
    </div>
  )
}

export default Product